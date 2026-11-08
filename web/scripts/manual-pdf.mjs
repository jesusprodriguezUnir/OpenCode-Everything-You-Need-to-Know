// Prints /manual/ to public/manual-opencode.pdf (A4, page numbers). Run: npm run manual:pdf.
import { mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { BASE_URL, buildSite, startPreview, stopPreview } from './manual-preview.mjs';

const PDF = fileURLToPath(new URL('../public/manual-opencode.pdf', import.meta.url));

buildSite();
mkdirSync(dirname(PDF), { recursive: true });
const preview = await startPreview();
try {
	const browser = await chromium.launch();
	try {
		const page = await browser.newPage();
		await page.goto(`${BASE_URL}/manual/`, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);
		await page.evaluate(() => {
			// Label each tab panel with its tab name, so printed PowerShell/bash variants stay identifiable.
			for (const panel of document.querySelectorAll('starlight-tabs [role="tabpanel"]')) {
				const label = document.getElementById(panel.getAttribute('aria-labelledby') ?? '')?.textContent?.trim();
				if (label) panel.setAttribute('data-manual-tab', label);
			}
			// Internal links point to chapters inside the PDF; drop the ones that do not.
			const anchors = new Map(
				[...document.querySelectorAll('[data-manual-slug]')].map((s) => [s.dataset.manualSlug, s.id]),
			);
			for (const a of document.querySelectorAll('.manual a[href^="/"]')) {
				const slug = new URL(a.getAttribute('href'), location.origin).pathname.replace(/^\/|\/$/g, '') || 'index';
				const target = anchors.get(slug);
				if (target) a.setAttribute('href', `#${target}`);
				else a.removeAttribute('href');
			}
		});
		await page.emulateMedia({ media: 'print' });
		// Page size and margins come from @page in /manual/ (no margin on the cover, so no footer there).
		await page.pdf({
			path: PDF,
			preferCSSPageSize: true,
			printBackground: true,
			displayHeaderFooter: true,
			headerTemplate: '<span></span>',
			footerTemplate:
				'<div style="width:100%;margin:0 16mm;display:flex;justify-content:space-between;font-family:Helvetica,Arial,sans-serif;font-size:7px;color:#52606d"><span>OpenCode V2 y OpenSpec · Manual de formación</span><span class="pageNumber"></span></div>',
		});
	} finally {
		await browser.close();
	}
} finally {
	stopPreview(preview);
}
console.log(`${PDF}: ${statSync(PDF).size} bytes`);

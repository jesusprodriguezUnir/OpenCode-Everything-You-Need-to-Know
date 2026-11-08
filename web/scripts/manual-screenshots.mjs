// Captures the screenshots of our own site used in the printable manual (src/assets/manual/).
// Run: npm run manual:shots. Light theme, desktop 1280x800.
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { BASE_URL, buildSite, startPreview, stopPreview } from './manual-preview.mjs';

const OUT = fileURLToPath(new URL('../src/assets/manual/', import.meta.url));

async function capture(browser) {
	const context = await browser.newContext({
		viewport: { width: 1280, height: 800 },
		colorScheme: 'light',
		deviceScaleFactor: 1,
	});
	await context.addInitScript(() => {
		try {
			localStorage.setItem('starlight-theme', 'light');
		} catch {
			// storage blocked: the page keeps its default theme
		}
	});
	const page = await context.newPage();
	const open = async (path) => {
		await page.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);
	};

	// 1. Home
	await open('/');
	await page.screenshot({ path: join(OUT, 'home.png') });

	// 2. Sidebar with the OpenCode + OpenSpec group open (the sidebar scrolls on its own).
	await open('/openspec/');
	await page.locator('#starlight__sidebar summary', { hasText: 'OpenCode + OpenSpec' }).first().scrollIntoViewIfNeeded();
	await page.screenshot({ path: join(OUT, 'sidebar-openspec.png') });

	// 3. OpenSpec flow page
	await open('/openspec/flujo-de-trabajo/');
	await page.screenshot({ path: join(OUT, 'flujo-openspec.png') });

	// 4. V1 -> V2 migration table (element shot of the first table)
	await open('/avanzado/migracion/');
	const table = page.locator('main table').first();
	await table.scrollIntoViewIfNeeded();
	await table.screenshot({ path: join(OUT, 'migracion-tabla.png') });

	// 5. Footer with the webdespega credit
	await open('/');
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await page.waitForTimeout(300);
	await page.screenshot({ path: join(OUT, 'pie-webdespega.png') });

	await context.close();
}

buildSite();
mkdirSync(OUT, { recursive: true });
const preview = await startPreview();
try {
	const browser = await chromium.launch();
	try {
		await capture(browser);
	} finally {
		await browser.close();
	}
} finally {
	stopPreview(preview);
}
console.log('Capturas guardadas en src/assets/manual/');

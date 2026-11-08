// Shared by manual-screenshots.mjs and manual-pdf.mjs: build the site, serve it with `astro preview`
// and stop that server reliably (on Windows the npx/cmd tree needs taskkill /t).
import { spawn, spawnSync } from 'node:child_process';

export const PREVIEW_PORT = 4339;
export const BASE_URL = `http://localhost:${PREVIEW_PORT}`;
const shell = process.platform === 'win32';

export function buildSite() {
	const result = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', shell });
	if (result.status !== 0) throw new Error('npm run build falló');
}

async function isUp(url) {
	try {
		await fetch(url);
		return true;
	} catch {
		return false;
	}
}

export async function startPreview() {
	// A server left over from a previous run would serve stale files: refuse to continue.
	if (await isUp(BASE_URL)) throw new Error(`El puerto ${PREVIEW_PORT} ya está en uso. Ciérralo y repite.`);
	const child = spawn('npx', ['astro', 'preview', '--port', String(PREVIEW_PORT)], { stdio: 'ignore', shell });
	const start = Date.now();
	while (Date.now() - start < 60_000) {
		if (child.exitCode !== null) throw new Error(`astro preview terminó con código ${child.exitCode}`);
		if (await isUp(`${BASE_URL}/`)) return child;
		await new Promise((r) => setTimeout(r, 500));
	}
	stopPreview(child);
	throw new Error(`astro preview no respondió en ${BASE_URL}`);
}

export function stopPreview(child) {
	if (shell) spawnSync('taskkill', ['/pid', String(child.pid), '/t', '/f'], { stdio: 'ignore' });
	else child.kill('SIGTERM');
}

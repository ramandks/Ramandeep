/* Minimal static server for local preview and tests. Serves directory index.html. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
};

export function startServer(port = 4173) {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    /* Keep requests inside the site root. */
    let file = join(root, normalize(urlPath).replace(/^(\.\.[/\\])+/, ''));
    if (!file.startsWith(root)) file = join(root, '404.html');

    try { if ((await stat(file)).isDirectory()) file = join(file, 'index.html'); }
    catch { file = join(root, '404.html'); }

    try {
      const body = await readFile(file);
      res.writeHead(file.endsWith('404.html') ? 404 : 200, {
        'content-type': TYPES[extname(file)] || 'application/octet-stream',
      });
      res.end(body);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain' });
      res.end('Not found');
    }
  });
  return new Promise((r) => server.listen(port, () => r(server)));
}

/* `node tools/server.mjs` runs it standalone. */
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT) || 4173;
  await startServer(port);
  console.log(`Orbo Flow preview: http://localhost:${port}`);
}

import { Router } from 'express';
import marked from 'marked';
import fs from 'fs';
import path from 'path';

export const docsRouter = Router();

docsRouter.get('/:page', (req, res) => {
  const docPath = path.join(process.cwd(), 'docs', `${req.params.page}.md`);
  try {
    const raw = fs.readFileSync(docPath, 'utf-8');
    // TODO(depbot-triage): marked 0.3.6 → 4.0.10 — review usage below
    const html = marked(raw);
    res.send(`<html><body>${html}</body></html>`);
  } catch {
    res.status(404).send('Not found');
  }
});

docsRouter.get('/', (_req, res) => {
  // TODO(depbot-triage): marked 0.3.6 → 4.0.10 — review usage below
  const index = marked('# API Documentation

Select a page from the sidebar.');
  res.send(`<html><body>${index}</body></html>`);
});

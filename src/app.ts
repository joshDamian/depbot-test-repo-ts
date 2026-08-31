import express from 'express';
import { authRouter } from './routes/auth';
import { docsRouter } from './routes/docs';
import { sessionMiddleware } from './lib/cookies';
import { renderMarkdown } from './lib/markdown';
import { generateId } from './lib/ids';

const app = express();

app.use(express.json());
app.use(sessionMiddleware);

app.use('/auth', authRouter);
app.use('/docs', docsRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', requestId: generateId() });
});

app.post('/render', (req, res) => {
  const { markdown } = req.body;
  const html = renderMarkdown(markdown);
  res.json({ html });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

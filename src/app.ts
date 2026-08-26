import express from 'express';
import { authRouter } from './routes/auth';
import { uploadRouter } from './routes/upload';
import { sessionMiddleware } from './lib/cookies';
import { renderMarkdown } from './lib/markdown';

const app = express();

app.use(express.json());
app.use(sessionMiddleware);

app.use('/auth', authRouter);
app.use('/upload', uploadRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/render', (req, res) => {
  const { markdown } = req.body;
  const html = renderMarkdown(markdown ?? '');
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

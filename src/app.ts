import express from 'express';
import { authRouter } from './routes/auth';
import { uploadRouter } from './routes/upload';
import { sessionMiddleware } from './lib/cookies';
import { requireAuth, currentUser } from './middleware/auth-guard';

const app = express();

app.use(express.json());
app.use(sessionMiddleware);

app.use('/auth', authRouter);
app.use('/upload', uploadRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Protected route using express-jwt v5 middleware
app.get('/api/profile', requireAuth, currentUser, (req, res) => {
  res.json({ userId: (req as any).currentUserId });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

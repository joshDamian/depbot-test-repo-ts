import { Router } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'dev-secret';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ sub: username, role: 'admin' }, SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

authRouter.get('/verify', (req, res) => {
  const header = req.headers.authorization;
  if (!header) {
    res.status(401).json({ error: 'Missing token' });
    return;
  }

  const token = header.replace('Bearer ', '');

  const decoded = jwt.verify(token, SECRET, {
    algorithms: ['HS256'],
  });

  res.json({ user: decoded });
});

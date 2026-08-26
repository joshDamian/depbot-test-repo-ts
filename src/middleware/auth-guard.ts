import jwt from 'express-jwt';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

// express-jwt v5: default export, callable as jwt()
// v6+: named export { expressjwt }, req.user → req.auth
export const requireAuth = jwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
});

export function currentUser(req: Request, _res: Response, next: NextFunction) {
  // express-jwt v5 puts decoded token on req.user
  const user = (req as any).user;
  if (user) {
    (req as any).currentUserId = user.sub;
  }
  next();
}

import { Request, Response, NextFunction } from 'express';
import { Cookie, CookieJar } from 'tough-cookie';

const jar = new CookieJar();

export function sessionMiddleware(req: Request, _res: Response, next: NextFunction) {
  const raw = req.headers.cookie;
  if (!raw) {
    next();
    return;
  }

  // { loose: true } option removed in tough-cookie v5
  const parsed = Cookie.parse(raw, { loose: true });
  if (parsed) {
    const url = `${req.protocol}://${req.hostname}${req.path}`;
    jar.setCookieSync(parsed, url);
  }

  next();
}

export function getCookies(url: string): string {
  return jar.getCookieStringSync(url);
}

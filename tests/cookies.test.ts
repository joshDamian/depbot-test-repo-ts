import { describe, it, expect, vi } from 'vitest';
import { sessionMiddleware, getCookies } from '../src/lib/cookies';

describe('sessionMiddleware', () => {
  it('calls next() when no cookie header', () => {
    const req = { headers: {} } as any;
    const res = {} as any;
    const next = vi.fn();
    sessionMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('calls next() with a cookie header', () => {
    const req = {
      headers: { cookie: 'session=abc123' },
      protocol: 'http',
      hostname: 'localhost',
      path: '/',
    } as any;
    const res = {} as any;
    const next = vi.fn();
    sessionMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});

describe('getCookies', () => {
  it('returns a string', () => {
    const result = getCookies('http://localhost/');
    expect(typeof result).toBe('string');
  });
});

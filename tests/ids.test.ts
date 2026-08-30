import { describe, it, expect } from 'vitest';
import { generateId, generateTimeId, generateIdToBuffer } from '../src/lib/ids';

describe('generateId', () => {
  it('returns a valid UUID string', () => {
    const id = generateId();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });

  it('returns unique values', () => {
    const ids = new Set(Array.from({ length: 50 }, () => generateId()));
    expect(ids.size).toBe(50);
  });
});

describe('generateTimeId', () => {
  it('returns a valid UUID string', () => {
    const id = generateTimeId();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });
});

describe('generateIdToBuffer', () => {
  it('returns a 16-element byte array', () => {
    const buf = generateIdToBuffer();
    expect(buf).toHaveLength(16);
    buf.forEach((b) => {
      expect(b).toBeGreaterThanOrEqual(0);
      expect(b).toBeLessThanOrEqual(255);
    });
  });
});

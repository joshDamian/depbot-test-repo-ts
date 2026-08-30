import { v1, v4 } from 'uuid';

export function generateId(): string {
  return v4();
}

export function generateTimeId(): string {
  return v1();
}

export function generateIdToBuffer(): number[] {
  const buf = new Array(16);
  v4(undefined, buf, 0);
  return buf;
}
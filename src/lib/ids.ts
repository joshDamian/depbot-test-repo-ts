import { v4 as uuidv4, v1 as uuidv1 } from 'uuid';

export function generateId(): string {
  return uuidv4();
}

export function generateTimeId(): string {
  return uuidv1();
}

export function generateIdToBuffer(): Uint8Array {
  const buf = new Uint8Array(16);
  uuidv4(undefined, buf, 0);
  return buf;
}

import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

export function generateId(): string {
  return uuidv4();
}

export function generateTimeId(): string {
  return uuidv1();
}

export function generateIdToBuffer(): number[] {
  const buf = new Uint8Array(16);
  // TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
  uuidv4(undefined, buf, 0);
  return Array.from(buf);
}
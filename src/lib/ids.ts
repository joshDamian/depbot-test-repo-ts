// TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

export function generateId(): string {
  return uuidv4();
}

export function generateTimeId(): string {
  return uuidv1();
}

export function generateIdToBuffer(): number[] {
  const buf = new Array(16);
  uuidv4(null, buf, 0);
  return buf;
}
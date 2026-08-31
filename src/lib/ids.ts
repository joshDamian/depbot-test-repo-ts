// TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

export function generateId(): string {
  // TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
  return uuidv4();
}

export function generateTimeId(): string {
  // TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
  return uuidv1();
}

// TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
export function generateIdToBuffer(): number[] {
  const buf = new Uint8Array(16);
  uuidv4(undefined, buf, 0);
  return Array.from(buf);
}
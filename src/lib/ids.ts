// TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
import { v1, v4 } from 'uuid';

export function generateId(): string {
  // TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
  return v4();
}

export function generateTimeId(): string {
  // TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
  return v1();
}

export function generateIdToBuffer(): number[] {
  const buf = new Uint8Array(16);
  // TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
  v4(undefined, buf, 0);
  return Array.from(buf);
}
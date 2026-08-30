// TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
import uuid from 'uuid';

// TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
export function generateId(): string {
  return uuid();
}

export function generateTimeId(): string {
  return uuid.v1();
}

// TODO(depbot-triage): uuid 3.4.0 → 11.1.1 — review usage below
export function generateIdToBuffer(): number[] {
  const buf = new Array(16);
  uuid.v4(null, buf, 0);
  return buf;
}
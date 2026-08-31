// TODO(depbot-triage): marked 0.3.6 → 4.0.10 — review usage below
import { marked } from 'marked';

export interface Notification {
  title: string;
  bodyMd: string;
}

export function formatNotification(n: Notification): string {
  const heading = marked.parse(`## ${n.title}`);
  const body = marked.parse(n.bodyMd);
  return `<div class="notification">${heading}${body}</div>`;
}

export function formatBatch(notifications: Notification[]): string {
  return notifications.map(formatNotification).join('\n');
}

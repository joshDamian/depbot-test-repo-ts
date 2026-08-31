import { marked } from 'marked';

export interface Notification {
  title: string;
  bodyMd: string;
}

export function formatNotification(n: Notification): string {
  const heading = marked(`## ${n.title}`);
  const body = marked(n.bodyMd);
  return `<div class="notification">${heading}${body}</div>`;
}

export function formatBatch(notifications: Notification[]): string {
  return notifications.map(formatNotification).join('\n');
}

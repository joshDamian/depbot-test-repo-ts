import { marked } from 'marked';

export interface Notification {
  title: string;
  bodyMd: string;
}

export function formatNotification(n: Notification): string {
  const heading = marked.parse(`## ${n.title}`) as string;
  const body = marked.parse(n.bodyMd) as string;
  return `<div class="notification">${heading}${body}</div>`;
}

export function formatBatch(notifications: Notification[]): string {
  return notifications.map(formatNotification).join('\n');
}

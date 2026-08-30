import { describe, it, expect } from 'vitest';
import { formatNotification, formatBatch } from '../src/lib/notifications';

describe('formatNotification', () => {
  it('wraps title and body in a notification div', () => {
    const html = formatNotification({ title: 'Alert', bodyMd: 'Something happened' });
    expect(html).toContain('class="notification"');
    expect(html).toContain('Alert');
    expect(html).toContain('Something happened');
  });
});

describe('formatBatch', () => {
  it('formats multiple notifications', () => {
    const html = formatBatch([
      { title: 'First', bodyMd: 'one' },
      { title: 'Second', bodyMd: 'two' },
    ]);
    expect(html).toContain('First');
    expect(html).toContain('Second');
  });
});

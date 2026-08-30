import { describe, it, expect } from 'vitest';
import { renderMarkdown, renderWithHighlights } from '../src/lib/markdown';

describe('renderMarkdown', () => {
  it('converts a heading to HTML', () => {
    const html = renderMarkdown('# Hello');
    expect(html).toContain('<h1');
    expect(html).toContain('Hello');
  });

  it('converts a paragraph', () => {
    const html = renderMarkdown('Some text');
    expect(html).toContain('<p>');
  });

  it('converts inline code', () => {
    const html = renderMarkdown('Use `foo()` here');
    expect(html).toContain('<code>');
    expect(html).toContain('foo()');
  });
});

describe('renderWithHighlights', () => {
  it('produces HTML output', () => {
    const html = renderWithHighlights('**bold** text');
    expect(html).toContain('<strong>');
  });
});

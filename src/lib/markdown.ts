import { marked } from 'marked';

export function renderMarkdown(source: string): string {
  return marked.parse(source);
}

export function renderWithHighlights(source: string): string {
  marked.setOptions({ gfm: true, breaks: true });
  return marked.parse(source);
}
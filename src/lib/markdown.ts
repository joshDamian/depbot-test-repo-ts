import { marked } from 'marked';

export function renderMarkdown(source: string): string {
  return marked.parse(source) as string;
}

export function renderWithOptions(source: string): string {
  return marked.parse(source, { gfm: true, breaks: true }) as string;
}

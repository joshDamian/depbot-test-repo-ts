import marked from 'marked';

export function renderMarkdown(source: string): string {
  return marked(source);
}

export function renderWithOptions(source: string): string {
  return marked(source, { gfm: true, breaks: true });
}

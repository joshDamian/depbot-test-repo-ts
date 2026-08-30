// TODO(depbot-triage): marked 0.3.6 → 4.0.10 — review usage below
import marked from 'marked';

export function renderMarkdown(source: string): string {
  return marked(source);
}

export function renderWithHighlights(source: string): string {
  marked.setOptions({ gfm: true, breaks: true });
  return marked(source);
}
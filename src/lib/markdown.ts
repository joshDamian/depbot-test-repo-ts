import marked from 'marked';

export function renderMarkdown(source: string): string {
  // TODO(depbot-triage): marked 0.3.6 → 4.0.10 — review usage below
  return marked(source);
}

export function renderWithHighlights(source: string): string {
  // TODO(depbot-triage): marked 0.3.6 → 4.0.10 — review usage below
  marked.setOptions({ gfm: true, breaks: true });
  // TODO(depbot-triage): marked 0.3.6 → 4.0.10 — review usage below
  return marked(source);
}
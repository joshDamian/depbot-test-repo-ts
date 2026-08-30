import { describe, it, expect } from 'vitest';
import { processStyles } from '../src/lib/config';

describe('processStyles', () => {
  it('prefixes transform declarations', () => {
    const input = 'div { transform: scale(2); }';
    const output = processStyles(input);
    expect(output).toContain('-webkit-transform');
    expect(output).toContain('transform: scale(2)');
  });

  it('prefixes transition declarations', () => {
    const input = 'div { transition: all 0.3s; }';
    const output = processStyles(input);
    expect(output).toContain('-webkit-transition');
  });

  it('leaves other properties alone', () => {
    const input = 'div { color: red; }';
    const output = processStyles(input);
    expect(output).not.toContain('-webkit-');
    expect(output).toContain('color: red');
  });
});

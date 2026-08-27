import { parseString } from 'xml2js';
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

export function loadXmlConfig(filename: string): Promise<Record<string, unknown>> {
  const filePath = path.join(process.cwd(), 'config', filename);
  const xml = fs.readFileSync(filePath, 'utf-8');

  return new Promise((resolve, reject) => {
    parseString(xml, { explicitArray: false }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

const prefixer = postcss.plugin('autoprefixer-lite', (opts: { prefix?: string } = {}) => {
  const prefix = opts.prefix || '-webkit-';
  return (root) => {
    root.walkDecls((decl) => {
      if (decl.prop === 'transform' || decl.prop === 'transition') {
        decl.parent?.insertBefore(decl, decl.clone({ prop: prefix + decl.prop }));
      }
    });
  };
});

export function processStyles(cssInput: string): string {
  const result = postcss([prefixer]).process(cssInput);
  return result.css;
}
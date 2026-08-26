import { parseString } from 'xml2js';
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

export function loadXmlConfig(filename: string): Promise<Record<string, unknown>> {
  const filePath = path.join(process.cwd(), 'config', filename);
  const xml = fs.readFileSync(filePath, 'utf-8');

  // callback-based API — xml2js v0.6+ changes parsing behavior
  return new Promise((resolve, reject) => {
    parseString(xml, { explicitArray: false }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

export function processStyles(cssInput: string): string {
  // synchronous .css access removed in postcss v8 — must use async .then()
  const result = postcss().process(cssInput);
  return result.css;
}

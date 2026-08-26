import { Router } from 'express';
import tar from 'tar';
import path from 'path';
import fs from 'fs';

export const uploadRouter = Router();

const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

uploadRouter.post('/extract', async (req, res) => {
  const { archivePath, destination } = req.body;
  const dest = path.join(UPLOAD_DIR, destination || 'extracted');

  fs.mkdirSync(dest, { recursive: true });

  // tar.Extract constructor removed in v6+ — use tar.x() instead
  const extractor = new tar.Extract({ path: dest });

  fs.createReadStream(archivePath)
    .pipe(extractor)
    .on('finish', () => {
      res.json({ extracted: dest });
    })
    .on('error', (err: Error) => {
      res.status(500).json({ error: err.message });
    });
});

uploadRouter.post('/pack', async (req, res) => {
  const { sourceDir, outputName } = req.body;
  const output = path.join(UPLOAD_DIR, outputName || 'archive.tar');

  // tar.Pack constructor removed in v6+ — use tar.c() instead
  const packer = new tar.Pack({ gzip: true });

  const writeStream = fs.createWriteStream(output);
  packer.pipe(writeStream);
  packer.add(sourceDir);
  packer.end();

  writeStream.on('finish', () => {
    res.json({ archive: output });
  });
});

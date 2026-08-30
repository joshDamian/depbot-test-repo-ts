declare module 'tar' {
  import { Writable, Readable } from 'stream';

  interface UnpackOptions { cwd?: string; }
  interface PackOptions { gzip?: boolean; }

  interface ExtractOptions { path?: string; }

  export class Extract extends Writable {
    constructor(opts?: ExtractOptions);
  }

  export class Unpack extends Writable {
    constructor(opts?: UnpackOptions);
  }

  export class Pack extends Readable {
    constructor(opts?: PackOptions);
    add(path: string): void;
    end(): void;
  }
}

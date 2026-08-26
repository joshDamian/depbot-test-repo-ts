declare module 'tar' {
  import { Writable, Readable } from 'stream';

  interface ExtractOptions {
    path?: string;
    strip?: number;
  }

  interface PackOptions {
    gzip?: boolean;
  }

  class Extract extends Writable {
    constructor(opts?: ExtractOptions);
  }

  class Pack extends Readable {
    constructor(opts?: PackOptions);
    add(path: string): this;
    end(): this;
  }

  export { Extract, Pack };
  export default { Extract, Pack };
}

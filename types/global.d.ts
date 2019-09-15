declare module 'ace-builds/src-noconflict/ace' {}

declare module 'nanoid' {
  var x: () => string;
  export = x;
}

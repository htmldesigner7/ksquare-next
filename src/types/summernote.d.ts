// Summernote and jQuery ship no usable types here; only the calls used by RichTextField are described.
declare module "summernote/dist/summernote-lite.min.js";
declare module "summernote/dist/summernote-lite.min.css";

interface JQuery {
  summernote(options?: object | string, ...args: unknown[]): unknown;
}

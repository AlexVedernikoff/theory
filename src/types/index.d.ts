export {};

declare global {
  interface Array<T> {
    findUnique(): T[];
  }
}

export {};

declare global {
  interface Array<T> {
    findUnique(): T[];
    mySort(callback?: any): T[];
  }
}

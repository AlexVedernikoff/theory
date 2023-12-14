export {};

declare global {
  interface Array<T> {
    findUnique(): T[];
    findUniqueVer20(): T[];
    mySort(callback?: any): T[];
  }
}

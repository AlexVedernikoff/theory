import { useRef } from "react";

// версия для React
export function useDebounceFunction(callback, delay) {
  const ref = useRef<ReturnType<typeof setTimeout>>();
  return (...args) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => callback(...args), delay);
  };
}

// версия для JavaScript native
export function debounceJSNative(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), delay);
  };
}

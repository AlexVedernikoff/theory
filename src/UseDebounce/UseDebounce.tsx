import React, { useState, useEffect } from "react";
import { useDebounceFunction } from "./useDebounceFunction";

export const UseDebounce: React.FC = () => {
  const [value, setValue] = useState();

  const logValue = () => console.log("value = ", value);

  const logValueDebounsed = useDebounceFunction(logValue, 1500);

  useEffect(() => {
    logValueDebounsed();
  }, [value, logValueDebounsed]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <input onChange={handleChange} />;
};

// https://habr.com/ru/companies/domclick/articles/510616/

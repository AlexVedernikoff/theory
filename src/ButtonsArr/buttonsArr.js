import { useState } from "react";

export default function Buttons() {
  const [labels, setLabels] = useState([]);

  const addButton = () => {
    const id = labels.length ? Math.max(...labels) + 1 : 0;
    setLabels((prev) => {
      return [...prev, id];
    });
  };

  const removeButton = (id) => {
    // const idx = text.findIndex((el) => el === id);
    const idx = labels.indexOf(id);
    setLabels((prev) => {
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
    });
  };

  const buttons = labels.map((el) => (
    <button key={el} onClick={() => removeButton(el)}>
      {el}
    </button>
  ));

  return (
    <>
      <h1>Создаём массив из кнопок</h1>
      <button onClick={addButton}>Создать новую кнопку</button>
      <div>{buttons}</div>
    </>
  );
}

// Array.find((el) => el === id) возвращает первый ЭЛЕМЕНТ, для которого callback функция вернёт true, или undefined, если такого элемента не найдено.

// Array.findIndex((el) => el === id) возвращает ИНДЕКС первого элемента, для которого callback функция вернёт true, или -1, если такого элемента не найдено.

// Array.indexOf(searchElement, fromIndex?) возвращает ИНДЕКС первого элемента, совпадающего с searchElement, или -1, если такого элемента не найдено.

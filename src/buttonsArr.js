import { useState } from "react";

export default function Buttons() {
  const [text, setText] = useState([]);

  const addButton = () => {
    const id = text.length ? Math.max(...text) + 1 : 0;
    setText((prev) => {
      return [...prev, id];
    });
  };

  const removeButton = (id) => {
    // const idx = text.findIndex((el) => el === id);
    const idx = text.indexOf(id);
    setText((prev) => {
      return [...prev.slice(0, idx), ...prev.slice(idx, prev.length - 1)];
    });
  };

  const buttons = text.map((el) => (
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
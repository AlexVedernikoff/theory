import { useEffect } from "react";
import s from "./drag_drop_native.module.scss";

export const DragDropNative = () => {
  useEffect(() => {
    const getNextElement = (cursorPosition, currentElement) => {
      // Получаем объект с размерами и координатами
      const currentElementCoord = currentElement.getBoundingClientRect();
      // Находим вертикальную координату центра текущего элемента
      const currentElementCenter =
        currentElementCoord.y + currentElementCoord.height / 2;

      // Если курсор выше центра элемента, возвращаем текущий элемент
      // В ином случае — следующий DOM-элемент
      const nextElement =
        cursorPosition < currentElementCenter
          ? currentElement
          : currentElement.nextElementSibling;

      return nextElement;
    };
    const handleDragstart = (evt) => {
      console.log("сработало событие dragstart");
      evt.target.classList.add(s.selected);
    };

    const handleDragend = (evt) => {
      console.log("сработало событие dragend");
      evt.target.classList.remove(s.selected);
    };

    const handleDragover = (evt) => {
      console.log("сработало событие dragover");
      evt.preventDefault();

      const activeElement = tasksListElement.querySelector(`.${s.selected}`);
      const currentElement = evt.target;
      const isMoveable =
        activeElement !== currentElement &&
        currentElement.classList.contains(`${s.tasks__item}`);

      if (!isMoveable) {
        return;
      }

      // evt.clientY — вертикальная координата курсора в момент,
      // когда сработало событие
      const nextElement = getNextElement(evt.clientY, currentElement);

      // Проверяем, нужно ли менять элементы местами
      if (
        (nextElement && activeElement === nextElement.previousElementSibling) ||
        activeElement === nextElement
      ) {
        // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
        return;
      }

      tasksListElement.insertBefore(activeElement, nextElement);
    };

    const tasksListElement = document.querySelector(`.${s.tasks__list}`);
    const taskElements = tasksListElement.querySelectorAll(`.${s.tasks__item}`);
    for (const task of taskElements) {
      task.draggable = true;
    }

    tasksListElement.addEventListener("dragstart", handleDragstart);
    tasksListElement.addEventListener("dragend", handleDragend);
    tasksListElement.addEventListener("dragover", handleDragover);

    return () => {
      console.log("сработало return в useEffect()");
      tasksListElement.removeEventListener("dragstart", handleDragstart);
      tasksListElement.removeEventListener("dragend", handleDragend);
      tasksListElement.removeEventListener("dragover", handleDragover);
    };
  });
  return (
    <section className={s.tasks}>
      <h1 className={s.tasks__title}>To do list</h1>

      <ul className={s.tasks__list}>
        <li className={s.tasks__item}>learn HTML</li>
        <li className={s.tasks__item}>learn CSS</li>
        <li className={s.tasks__item}>learn JavaScript</li>
        <li className={s.tasks__item}>learn PHP</li>
        <li className={s.tasks__item}>stay alive</li>
      </ul>
    </section>
  );
};

// https://habr.com/ru/companies/htmlacademy/articles/541972/

// todo: функция, определяющая количество дней между двумя датами

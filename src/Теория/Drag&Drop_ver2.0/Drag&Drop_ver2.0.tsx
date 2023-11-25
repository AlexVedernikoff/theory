import React, { DragEvent } from "react";
import { useRef } from "react";
import { useState } from "react";
import s from "./drag_drop_ver2.0.module.scss";

interface IProps {}

const LABELS = [1, 2, 3, 4, 5];
const swingElementsOfArray = (arr, i, k) => {
  const temp = arr[i];
  arr[i] = arr[k];
  arr[k] = temp;
  return [...arr];
};

export const DragDrop_ver20: React.FC<IProps> = () => {
  console.log("render DragDrop_ver20!!");
  const [labels, setLabels] = useState(LABELS);
  let offsetX, offsetY;
  //   let element = useRef();
  let element;
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    // event.preventDefault();
    const target = event.target as HTMLButtonElement;
    console.log("handleClick()");
    console.log("event.target.id = ", target);
    // console.log("clientX = ", event.clientX);
    // console.log("clientY = ", event.clientY);
    if (!element) element = document.getElementById(target.id);
    if (element) element.style.color = "red";
    console.log("element = ", element);
    // offsetX = event.clientX - element.getBoundingClientRect().left;
    // offsetY = event.clientY - element.getBoundingClientRect().top;
    offsetX = event.clientX - parseInt(element.style.left);
    offsetY = event.clientY - parseInt(element.style.top);

    element.addEventListener("mousemove", move);
  };

  const move = (e) => {
    console.log("move()");
    const el = e.target;
    // const el = element;
    console.log("e.pageX = ", e.pageX);
    console.log("e.pageY = ", e.pageY);
    console.log("offsetX = ", offsetX);
    console.log("offsetY = ", offsetY);
    el.style.left = `${e.pageX - offsetX}px`;
    el.style.top = `${e.pageY - offsetY}px`;
    // el.style.left = `${parseInt(el.style.left) + offsetX}px`;
    // el.style.top = `${parseInt(el.style.top) + offsetY}px`;
  };
  const remove = (e) => {
    console.log("onMouseUp()");
    const el = e.target;
    // const el = element;
    el.removeEventListener("mousemove", move);
  };

  //   const handleMouseMove = (event) => {
  //     console.log("handleMouseMove()");
  //     console.log("clientX = ", event.clientX);
  //     console.log("clientY = ", event.clientY);
  //   };
  //   const handleDragover = (event) => {
  //     console.log("handleDragover()");
  //     console.log("clientX = ", event.clientX);
  //     console.log("clientY = ", event.clientY);
  //     const target = event.target as HTMLButtonElement;
  //     const element = document.getElementById(target.id);
  //     console.log("element = ", element);
  //     if (element) {
  //       element.style.left = `${event.clientX}px`;
  //       element.style.top = `${event.clientY}px`;
  //     }
  //   };

  const over = (e) => {
    console.log("over()");
    console.log("Мышь находится над элементом: ", e.target.id);
    // console.log(
    //   "swingElementsOfArray(labels, 0, e.target.id) = ",
    //   swingElementsOfArray(labels, 0, e.target.id)
    // );
    // setLabels((prev) => {
    //   console.log("prev = ", prev);
    //   console.log(
    //     "swingElementsOfArray(labels, 0, e.target.id) = ",
    //     swingElementsOfArray(prev, 0, e.target.id - 1)
    //   );
    //   return swingElementsOfArray(prev, 0, e.target.id - 1);
    // });
    // const el = e.target;
    element && element.removeEventListener("mousemove", move);
    element &&
      setLabels(swingElementsOfArray(labels, element.id - 1, e.target.id - 1));
  };

  const labelsList = labels.map((label, i) => (
    <div
      key={label}
      id={String(i + 1)}
      className={`${s.item}`}
      //   draggable="true"
      style={{ position: "relative", top: 0, left: 0 }}
      //   onDragStart={handleDragStart}

      //   onMouseMove={handleMouseMove}
      //   onDragOver={handleDragover}

      onMouseOver={over}
    >
      {label}
    </div>
  ));
  //   return <DragDropContainer>{labelsList}</DragDropContainer>;
  return (
    <div
      className={`${s.container}`}
      onMouseDown={handleDragStart}
      onMouseUp={remove}
    >
      {labelsList}
    </div>
  );
};

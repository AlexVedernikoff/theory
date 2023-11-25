import React from "react";
import { useState } from "react";
import s from "./drag_drop_ver3.0.module.scss";

interface IProps {}

export const DragDrop_ver30: React.FC<IProps> = () => {
  console.log("Рендер компонента Drag&Drop");
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: "Карточка 3" },
    { id: 2, order: 1, text: "Карточка 1" },
    { id: 3, order: 2, text: "Карточка 2" },
    { id: 4, order: 4, text: "Карточка 4" },
  ]);

  const [currentCard, setCurrentCard] = useState(null);

  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>, card?) => {
    console.log("Сработало событие onDragStart на карточке", card);
    setCurrentCard(card);
    // event.target.style.background = "white";
  };

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("Сработало событие onDragOver");
    event.target.style.background = "lightgrey";
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>, card) => {
    event.preventDefault();
    console.log("Сработало событие onDrop на карточке", card);
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
  };

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else return -1;
  };

  const dragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Сработало событие onDragEnd");

    event.target.style.background = "white";
  };

  return (
    <div className={`${s.container}`}>
      {cardList.sort(sortCards).map((card) => (
        <div
          key={card.id}
          className={`${s.card} ${s.animation}`}
          draggable={true}
          // слушатель события onDragStart срабатывает в тот момент, когда мы взяли карточку (ЛКМ)
          onDragStart={(event) => dragStartHandler(event, card)}
          onDragLeave={(event) => dragEndHandler(event)}
          onDragEnd={(event) => dragEndHandler(event)}
          // слушатель события onDragOver срабатывает, когда элемент находится надо зоной, В КОТОРУЮ его можно переместить.
          onDragOver={(event) => dragOverHandler(event)}
          // слушатель события onDrop срабатывает НА ТОМ ЭЛЕМЕНТЕ, на который мы "бросаем" исходный элемент.
          // взяли элемент 1, "бросили" его над элементом 3 => onDrop сработает на элементе 3.
          onDrop={(event) => dropHandler(event, card)}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
};

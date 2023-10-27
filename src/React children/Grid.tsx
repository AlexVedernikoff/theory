import React from "react";

interface IProps {
  children: JSX.Element[];
}

export const Grid: React.FC<IProps> = ({ children }) => {
  const childrenList = React.Children.map(
    children,
    (child, i) => child.props.render && child
  ).filter((child) => child);

  return <div>{childrenList}</div>;
};

// https://stasonmars.ru/javascript/pogruzhaemsya-v-raboty-s-children-na-react/

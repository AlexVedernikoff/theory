import React from "react";
import s from "./drag_drop_ver2.0.module.scss";

interface IProps {
  children: JSX.Element[];
}

export const DragDropContainer: React.FC<IProps> = ({ children }) => {
  return <div className={`${s.container}`}>{children}</div>;
};

import React from "react";

interface IProps {
  color: string;
  render: boolean;
}

export const Row: React.FC<IProps> = ({ color }) => {
  return <div style={{ color }}>Row</div>;
};

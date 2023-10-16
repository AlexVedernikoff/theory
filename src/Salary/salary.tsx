import React from "react";
import { useState } from "react";

const employees = [
  { name: "A", salary: 30, position: "junior" },
  { name: "B", salary: 10, position: "student" },
  { name: "C", salary: 40, position: "junior" },
  { name: "D", salary: 50, position: "middle" },
  { name: "E", salary: 100, position: "senior" },
  { name: "F", salary: 100, position: "senior" },
  { name: "G", salary: 50, position: "middle" },
  { name: "H", salary: 100, position: "senior" },
];

export function Salary(): JSX.Element {
  const [rating, setRating] = useState<string | undefined>();

  const salaryRatings = Array.from(
    new Set(employees.map(({ salary }) => salary).sort((a, b) => b - a))
  );

  const employeesFiltered = rating
    ? employees.filter(({ salary }) => {
        return salary === salaryRatings[Number(rating) - 1];
      })
    : employees;

  const employeesList = (
    <ul>
      {employeesFiltered.map(({ name, salary, position }) => {
        return (
          <li key={name}>
            {name} {salary} {position}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "25px",
      }}
    >
      <h1>Salary</h1>

      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRating(e.target.value)
        }
      ></input>
      <div>рэйтинг зарплаты = {rating}</div>
      {employeesList}
    </div>
  );
}

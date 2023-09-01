/* eslint-disable react-hooks/rules-of-hooks */
// цикл for...in

import { useMemo } from "react";

interface IDropDownItems {
  QE?: string[];
  SQM?: string[];
}

const dropDownItems = useMemo(() => {
  const result: IDropDownItems = {};
  let key: keyof IDropDownItems;
  for (key in managers) {
    result[key] = managers[key].map((item) => {
      return `${item.ldap} ${item.username}`;
    });
  }
  return result;
}, [managers]);

// interface, в котором ключами будут элементы массива строк

const roles = ["QE", "SQM"] as const;

type RDropDownItems = Partial<Record<(typeof roles)[number], string[]>>;

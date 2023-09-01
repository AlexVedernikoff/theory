// цикл for...in

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

type IDropDownItems = Partial<Record<(typeof roles)[number], string[]>>;

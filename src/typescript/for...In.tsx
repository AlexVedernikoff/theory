interface IDropDownItems {
  QE?: string[];
  SQM?: string[];
}

const managers = {
  QE: [
    { ldap: 123, username: "Alex" },
    { ldap: 456, username: "Alice" },
  ],
  SQM: [
    { ldap: 789, username: "Lisa" },
    { ldap: 901, username: "Daria" },
  ],
};

export const dropDownItems = () => {
  const result: IDropDownItems = {};
  let key: keyof IDropDownItems;
  for (key in managers) {
    result[key] = managers[key].map((item) => {
      return `${item.ldap} ${item.username}`;
    });
  }
  return result;
};

export const dataAsSelectOption = (data, value, label) => {
  return data.map((el) => {
    return {
      value: el[value],
      label: el[label],
    };
  });
};

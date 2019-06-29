export const classn = (obj: { [key: string]: any }): string => {
  let str = '';
  for (const k in obj) {
    if (obj[k]) {
      str = `${str} ${k}`;
    }
  }

  return str;
};

// import { AUTH_VALIDATE_ARR } from "pages/auth/constant/common";

export const objectValueExtractor = (value: string, object: { [key: string]: string }) => {
  for (let i in object) {
    if (value === i) {
      return object[i];
    }
  }
};

export const percentage = (num: number, percentage: number) => {
  return num * (percentage / 100);
};

// export const validateError = (msg: string) => {
//   return AUTH_VALIDATE_ARR.includes(msg);
// };
export const removeTag = (str: string) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/\&nbsp;/g, "").replace(/(<([^>]+)>)/gi, "");
};

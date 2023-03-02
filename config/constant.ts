const parse = (val: string) => {
  try {
    return JSON.parse(val);
  } catch {
    return val;
  }
};

export const VITE_APP_TITLE: string = parse(import.meta.env.VITE_APP_TITLE);
export const VITE_TITLE_VISIBLE: boolean = parse(import.meta.env.VITE_TITLE_VISIBLE);

import { ChangeEvent, useCallback, useState } from "react";

type Return = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: ChangeEvent<HTMLInputElement>) => void
];

const useInput = (initialValue: string): Return => {
  const [state, setState] = useState<string>(initialValue);
  const changeState = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);
  return [state, setState, changeState];
};

export default useInput;

import { useCallback, MouseEvent } from "react";

export const useToggleClassName = <T extends HTMLElement>(
  className: string
) => {
  return useCallback((e: MouseEvent<T>) => {
    (e.currentTarget as Element).classList.toggle(className);
  }, []);
};

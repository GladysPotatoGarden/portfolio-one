/* eslint-disable react-refresh/only-export-components -- context + hook pattern */
import { createContext, useContext } from "react";

export const RevealContext = createContext(0);

export function useRevealStage() {
  return useContext(RevealContext);
}

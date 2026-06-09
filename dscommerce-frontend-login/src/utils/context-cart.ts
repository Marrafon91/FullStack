import { createContext } from 'react';

export type ContextCardCountType = {
  contextCartCount: number;
  setContextCartCount: (contextCartCount: number) => void;
};

export const ContextCartCount = createContext<ContextCardCountType>({
  contextCartCount: 0,
  setContextCartCount: () => {},
});

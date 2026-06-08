import { createContext } from 'react';

export type ContextFilterType = {
  productCount: number;
  setProductCount: (count: number) => void;
};

export const ContextFilter = createContext<ContextFilterType>({
  productCount: 0,
  setProductCount: () => {},
});

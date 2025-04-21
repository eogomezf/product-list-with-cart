import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface ProductProps {
  key: string;
  name: string;
  category: string;
  price: string;
  thumbnail: string;
  quantity: number;
}

type CartContextType = [
  ProductProps[],
  Dispatch<SetStateAction<ProductProps[]>>
];

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

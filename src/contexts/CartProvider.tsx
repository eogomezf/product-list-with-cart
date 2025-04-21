import { createContext, ReactNode, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

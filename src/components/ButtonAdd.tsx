import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

interface ProductProps {
  key: string;
  name: string;
  category: string;
  price: string;
  quantity: number;
}

export const ButtonAdd = (props: ProductProps) => {
  const [cart, setCart] = useContext(CartContext);
  const { name, category, price } = props;
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cartData: ProductProps[] = cart;
    console.log(cartData);
    const index = cartData.findIndex((item) => item.name === name);

    if (index !== -1) {
      cartData[index] = {
        key: name,
        name: name,
        category: category,
        price: price,
        quantity: quantity,
      };
    } else {
      cartData.push({
        key: name,
        name: name,
        category: category,
        price: price,
        quantity: quantity,
      });
    }

    const validCart = cartData.filter((item) => item.quantity > 0);
    setCart(validCart);
  }, [cart, category, name, price, quantity, setCart]);

  const showButton =
    quantity == 0 ? (
      <button
        onClick={() => setQuantity(quantity + 1)}
        type="button"
        className="btn btn-light rounded-pill btn-sm d-flex align-items-center px-3 py-2 shadow-sm "
        style={{
          border: "2px solid gray",
          width: "150px",
          position: "absolute",
          bottom: "-18px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <img
          src="src/assets/images/icon-add-to-cart.svg"
          className="me-2"
          style={{ width: "16px" }}
        />
        <span className="fw-bold text-dark">Add to cart</span>
      </button>
    ) : (
      <div
        className=" bg-danger rounded-pill btn-sm d-flex align-items-center justify-content-between px-3 py-2 shadow-sm "
        style={{
          border: "2px solid red",
          width: "150px",
          position: "absolute",
          bottom: "-18px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <button
          onClick={() => setQuantity(quantity - 1)}
          className=" bg-danger btn-outline-light rounded-circle"
          style={{
            border: "2px solid white",
            fontSize: "10px",
          }}
        >
          <img
            src="src/assets/images/icon-decrement-quantity.svg"
            className="my-1"
            style={{ width: "8px" }}
          />
        </button>
        <span className="text-white">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className=" bg-danger btn-outline-light rounded-circle"
          style={{
            border: "2px solid white",
            fontSize: "10px",
          }}
        >
          <img
            src="src/assets/images/icon-increment-quantity.svg"
            className="my-1"
            style={{ width: "8px" }}
          />
        </button>
      </div>
    );

  return <>{showButton}</>;
};

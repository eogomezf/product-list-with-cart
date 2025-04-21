//import { useState } from "react";

import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartProvider";

interface ProductProps {
  key: string;
  name: string;
  category: string;
  price: string;

  quantity: number;
}

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const cartData: ProductProps[] = cart;
  // let cartData: cart;
  console.log(cart);
  console.log(cart.reduce((acc, item) => acc + item.quantity, 0));
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPayment = cart.reduce(
    (acc, item) => acc + item.quantity * Number(item.price),
    0
  );

  // useEffect(() => {

  // }, []);

  const content =
    totalCartItems > 0 ? (
      // Section with items

      <div className="list m-3">
        <ul className="list-group list-group-numbered list-group-flush">
          {cartData.map((item) => (
            <li
              key={item.key}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.name}</div>
                <small className="text-danger">{item.quantity}x</small>{" "}
                <small className="text-secondary">@ {item.price}</small>{" "}
                <small>
                  {" "}
                  ${(item.quantity * Number(item.price)).toFixed(2)}
                </small>
              </div>
              <button
                className="btn btn-outline-secondary rounded-circle"
                style={{
                  padding: "3px 7px 7px 7px",
                }}
              >
                <img
                  src="src/assets/images/icon-remove-item.svg"
                  style={{ width: "16px" }}
                />
              </button>
            </li>
          ))}
        </ul>
        <div className="m-3 d-flex align-items-center justify-content-between">
          <span>Order Total</span>
          <h2>${totalPayment.toFixed(2)}</h2>
        </div>
        <div
          className="p-3 m1 bd-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgb(228, 223, 211)",
            borderRadius: "10px",
          }}
        >
          <span>
            <img
              src="src/assets/images/icon-carbon-neutral.svg"
              style={{ width: "16px" }}
            />
            This is a <strong>carbon-neutral</strong> delivery
          </span>
        </div>
        <button className="w-100 my-3 btn btn-danger rounded-pill align-item-center">
          Confirm Order
        </button>
      </div>
    ) : (
      // Section without items
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img
          className="w-50"
          src="src/assets/images/illustration-empty-cart.svg"
          alt="empty"
        />
        <p className="text-secondary">Your added items will appear here</p>
      </div>
    );
  return (
    <div
      className=" bg-white"
      style={{
        width: "20rem",
        borderRadius: "5px",
      }}
    >
      <h5 className="title m-2 p-3 text-danger">
        Your Cart ({totalCartItems})
      </h5>

      {content}
    </div>
  );
};

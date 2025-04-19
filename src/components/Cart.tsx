export const Cart = () => {
  // const img: string = "src/assets/images/image-brownie-mobile.jpg";
  return (
    <div
      className=" bg-white"
      style={{
        width: "20rem",
        borderRadius: "5px",
      }}
    >
      <h5 className="title m-2 p-3 text-danger">Your Cart (0)</h5>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img
          className="w-50"
          src="src/assets/images/illustration-empty-cart.svg"
          alt="empty"
        />

        <p className="text-secondary">Your added items will appear here</p>
      </div>
    </div>
  );
};

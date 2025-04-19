export const Cart = () => {
  const list = ["Waffle with Berries", "Juanete"];
  const content = list.length ? (
    // Section with items
    <div className="list m-3">
      <ul className="list-group list-group-numbered list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            <small className="text-danger">2x</small>
            {"  "} <small className="text-secondary">@ $5.00</small>
            {"  "}
            <small> $10.00</small>
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
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
          </div>

          <img
            src="src/assets/images/icon-remove-item.svg"
            className="me-2"
            style={{ width: "16px" }}
          />
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
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
      </ul>
      <div className="m-3 d-flex align-items-center justify-content-between">
        <span>Order Total</span>
        <h2>$ 45.15</h2>
      </div>
      <div
        className="p-3 m1 bd-flex align-items-center justify-content-center"
        style={{ backgroundColor: "rgb(228, 223, 211)", borderRadius: "10px" }}
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
      <h5 className="title m-2 p-3 text-danger">Your Cart ({list.length})</h5>

      {content}
    </div>
  );
};

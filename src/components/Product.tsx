interface ProductProps {
  name: string;
  category: string;
  price: string;
  img: string;
}

function Product(props: ProductProps) {
  const { name, category, price, img } = props;

  const styleImg = {
    width: "14rem",
    borderRadius: "10px",
  };

  return (
    <div className="d-flex flex-column align-items-center m-3">
      <div style={{ position: "relative" }}>
        <img
          id="imgProduct"
          className="border"
          src={img}
          alt={name}
          style={styleImg}
        />

        <button
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
      </div>

      <div className="mt-4 text-start w-100" style={{ maxWidth: "14rem" }}>
        <small className="text-muted">{category}</small>
        <div>
          <strong>{name}</strong>
        </div>
        <p className="text-danger mb-0">${parseFloat(price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Product;

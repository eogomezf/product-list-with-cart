//import { useContext } from "react";
import { ButtonAdd } from "./ButtonAdd";
//import { CartContext } from "../contexts/CartProvider";
interface ProductProps {
  key: string;
  name: string;
  category: string;
  price: string;
  img: string;
}

function Product(props: ProductProps) {
  const { name, category, price, img } = props;

  //const { addProductToCart } = useContext(CartContext);

  const styleImg = {
    width: "16rem",
    borderRadius: "10px",
  };

  return (
    <div className="d-flex flex-column align-items-center m-3">
      <div style={{ position: "relative" }}>
        {" "}
        <img
          id="imgProduct"
          className="border"
          src={img}
          alt={name}
          style={styleImg}
        />
        <ButtonAdd
          name={name}
          category={category}
          price={price}
          key={""}
          quantity={0}
        />
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

interface ProductProps {
  name: string;
  category: string;
  price: number;
  img: string;
}

function Product(props: ProductProps) {
  const { name, category, price, img } = props;
  const width = {
    width: "14rem",
    borderRadius: "10px",
  };
  // const img: string = "src/assets/images/image-brownie-desktop.jpg";
  //const name: string = "Product Name";
  //const price: number = 6.5;

  return (
    <>
      <div className="d-flex flex-column m-3 ">
        <img className="border" src={img} alt={name} style={width} />
        <div className="mt-3 d-flex flex-column">
          <small>{category}</small>
          <span>
            <strong>{name}</strong>
          </span>
          <p className="text-danger">$ {price}</p>
        </div>
      </div>
    </>
  );
}

export default Product;

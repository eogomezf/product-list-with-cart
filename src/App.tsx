import "./App.css";
import { Cart } from "./components/Cart";
import Product from "./components/Product";
import { CartProvider } from "./contexts/CartProvider";
import data from "./data/data.json";

function App() {
  const style = {
    marginTop: "100px",
    marginLeft: "120px",
    marginRight: "120px",
  };
  // localStorage.clear();
  return (
    <CartProvider>
      <div className="container pt-25 align-items-center" style={style}>
        <div className="row">
          <div className="col-9">
            <h1>Desserts</h1>
            <div className="d-flex flex-wrap m-5">
              {data.map((item) => (
                <Product
                  key={item.name}
                  name={item.name}
                  category={item.category}
                  price={item.price.toFixed(2)}
                  img={`src/${item.image.desktop}`}
                />
              ))}
            </div>
          </div>
          <div className="col-3">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;

import "./App.css";
import { Cart } from "./components/Cart";
import Product from "./components/Product";

function App() {
  const style = {
    marginTop: "100px",
    marginLeft: "120px",
    marginRight: "120px",
  };

  return (
    <div className="container pt-25 align-items-center" style={style}>
      <div className="row">
        <div className="col-9">
          <h1>Desserts</h1>
          <div className="d-flex flex-wrap m-5">
            <Product
              name={"Flang"}
              category={"Wafle"}
              price={10}
              img={"src/./assets/images/image-brownie-desktop.jpg"}
            />
          </div>
        </div>
        <div className="col-3">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;

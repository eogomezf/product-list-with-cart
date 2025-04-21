import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import Product from "./components/Product";
import { CartProvider } from "./contexts/CartProvider";
import data from "./data/data.json";

function App() {
  const [device, setDevice] = useState("desktop");

  const checkWindowsSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      setDevice("mobile");
    } else if (windowWidth <= 1024) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  };

  useEffect(() => {
    checkWindowsSize();
    window.addEventListener("resize", checkWindowsSize);
    return () => window.removeEventListener("resize", checkWindowsSize);
  }, []);

  console.log(device);
  return (
    <CartProvider>
      <div className="container pt-25 align-items-center main-container">
        <div className="row">
          <div className="col-xl-9 col-md-8  col-sm-12">
            <h1>Desserts</h1>
            <div className="d-flex flex-wrap w-100 justify-content-center">
              {data.map((item) => (
                <Product
                  key={item.name}
                  name={item.name}
                  category={item.category}
                  price={item.price.toFixed(2)}
                  img={`src/${item.image[device]}`}
                  thumbnail={item.image.thumbnail}
                />
              ))}
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-12">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;

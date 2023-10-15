import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import "./CartApp.css";
import { Provider } from "react-redux";
import store from "./CartStore/CartStore";

const AppCart = () => {
  return (
    <Provider store={store}>
      <div className="app-cart">
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default AppCart;

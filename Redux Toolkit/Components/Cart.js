import { useSelector, useDispatch } from "react-redux";
import {clearCart} from '../CartStore/CartSlice';

const Cart = () => {

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((state) => state.items);
  return (
    <div className="cart">
      <button onClick={handleClear}>Clear</button>
      <h1>Cart {cartItems.length}</h1>
      {cartItems.map((item) => (
        <p key={item.id}>{item?.name}</p>
      ))}
    </div>
  );
};

export default Cart;

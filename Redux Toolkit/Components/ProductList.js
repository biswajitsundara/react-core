import { useDispatch } from "react-redux";
import { addItem } from "../CartStore/CartSlice";
import { products } from "../data/data";

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      {products.map((product) => (
        <li className="item" key={product.id}>
          {product.name} - {product.price}{" "}
          <button className="add-to-cart" onClick={() => handleAdd(product)}>
            ADD
          </button>
        </li>
      ))}
    </div>
  );
};

export default ProductList;

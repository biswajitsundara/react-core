import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  return (
    <div>
      <h2>{"Veg & Nonveg Foods"}</h2>
      <ItemList restaurantName={props.restaurantName} />
    </div>
  );
};

export default RestaurantCategory;

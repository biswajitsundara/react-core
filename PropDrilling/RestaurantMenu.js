import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = (props) => {
  return (
    <div>
      <h1>{"Restaurant Menu"}</h1>
      <RestaurantCategory restaurantName={props.restaurantName} />
    </div>
  );
};

export default RestaurantMenu;

const ProductCard = (props) => {

  const {title, price, image, description} = props.cardData;
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt={title} className="card-image"/>
      </div>
      <div className="product-card-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={()=>console.log('Add to cart button is clicked')}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

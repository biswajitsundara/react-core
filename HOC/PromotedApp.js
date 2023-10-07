import withPromotedLabel from "./withPromotedLabel";
import ProductCard from "./ProductCard";
import './Style.css'

const PromotedApp = () => {
  const PromotedProductCard = withPromotedLabel(ProductCard);

  const cardData = [
    {
      title: "Wabi Sabi",
      description: "Regular Sleeve",
      price: "699",
      image:
        "https://nobero.com/cdn/shop/products/wabi-sabi_dcccd9a1-d30b-4539-8ec1-3a470cda8fe9.jpg?v=1676699678&width=360",  
    },
    {
      title: "Atom Half Sleeve Tshirt",
      description: "Round Neck",
      price: "599",
      image:
        "https://fourthdimensionclub.in/cdn/shop/products/ezgif.com-resize_ea53f38f-0b5b-431d-af91-833ee11efb0e.jpg?v=1695661581&width=900",
    },
  ];

  return (
    <div className="product-list">
      <PromotedProductCard cardData={cardData[0]} />
      <ProductCard cardData={cardData[1]} />
    </div>
  );
};

export default PromotedApp;

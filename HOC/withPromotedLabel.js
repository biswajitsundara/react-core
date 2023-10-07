//Higher Order Component
const withPromotedLabel = (ProductCard) => {
  return (cardData) => {
    return (
      <div className="promoted-card">
        <label className="promoted-label">Promoted</label>
        <ProductCard {...cardData}/>
      </div>
    );
  };
};

export default withPromotedLabel;

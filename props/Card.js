import "./Card.css";

const Card = ({ details: { name, email, phone } }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
    </div>
  );
};

export default Card;

function FoodCard(props) {
  return (
    <div className="food-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
}

export default FoodCard;
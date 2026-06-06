function TrainerCard(props) {
  return (
    <div className="trainer-card">
      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>
    </div>
  );
}

export default TrainerCard;
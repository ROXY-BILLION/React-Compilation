function DestinationCard({ image, city, country }) {
  return (
    <div className="destination-card">
      <img src={image} alt={city} />

      <div className="destination-info">
        <h3>{city}</h3>
        <p>{country}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
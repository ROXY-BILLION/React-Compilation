function MovieCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <h2>{props.category}</h2>
            <p>{props.stars}</p>
            <p>{props.date}</p>
        </div>
    )
}
export default MovieCard;
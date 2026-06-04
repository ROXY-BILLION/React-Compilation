function ProfileCard(props) {
    return (
    <div className="Card">
        <img
            src={props.image}
            alt={props.name} />
            
        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <p>{props.location}</p>

        <div className="Social-links">
          <a href={props.github}>Github</a>
          <a href={props.linkedin}>Linkedln</a>
        </div>
    </div>
   )
}
export default ProfileCard;
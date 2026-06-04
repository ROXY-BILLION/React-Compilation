function ProfileCard(props) {
    return (
    <div className="card">
      <img
        src={props.image}
        alt={props.name}
        className="profile-img"
      />

      <h2>{props.name}</h2>

      <p>{props.bio}</p>

      <div className="social-links">
        <a href={props.github}>GitHub</a>

        <a href={props.linkedin}>LinkedIn</a>

        <a href={props.twitter}>Twitter</a>
      </div>
    </div>
    );
}
export default ProfileCard;
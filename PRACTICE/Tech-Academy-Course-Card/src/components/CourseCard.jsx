function CourseCard(props) {
  return (
    <div className="course-card">
      <img
        src={props.thumbnail}
        alt={props.courseName}
        className="course-image"
      />

      <h2>{props.courseName}</h2>

      <p>
        <strong>Instructor:</strong> {props.instructor}
      </p>

      <p>
        <strong>Duration:</strong> {props.duration}
      </p>

      <p>
        <strong>Level:</strong> {props.level}
      </p>
    </div>
  );
}

export default CourseCard;
function StudentID(props) {
    return (
        <div className="id">
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <h2>{props.id}</h2>
            <p>{props.department}</p>
            <p>{props.level}</p>
        </div>    
    )
}
export default StudentID;
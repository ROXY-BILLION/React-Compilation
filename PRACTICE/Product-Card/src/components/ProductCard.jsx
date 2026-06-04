function ProductCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name}/>
            <h1>{props.productname}</h1>
            <p>{props.category}</p>
            <p>{props.price}</p>
            <button>Buy Now</button>
       </div> 
    )
}
export default ProductCard;
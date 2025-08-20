import "./card.css";

function Card(props) {
  return (
    <div>
        <div className="card">
            <img src={props.img} alt="" />
            <button className="btn2">Add To Cart</button>
            <p className="rgb">{props.name}</p>
            <p className="suprise">${props.price}</p>
        </div>
      </div>
  );
}

export default Card;

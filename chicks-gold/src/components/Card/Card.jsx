import "./Card.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbPoint } from "react-icons/tb";

export const Card = (props) => {
  return (
    <div className="card__card-container">
      {props.details.map((value, index) => (
        <div className="card__container" key={index}>
          <div className="card__header">
            <div className="card__on-sale">
              <div className="card__on-sale-text">
                <TbPoint style={{ color: "green", backgroundColor: "green", borderRadius: "50%", width: "5px", height: "5px" }} /> ON SALE{" "}
              </div>
              <div className="card__in-stock">In stock</div>
            </div>
            <input className="card__amount" type="number" defaultValue={1} />
          </div>
          <div className="card__image">
            <img src={value.img} alt={value.title} width={80} height={80} />
          </div>
          <div className="card__title">{value.title}</div>
          <div className="card__price">{value.price}</div>
          <div className="card__description">{value.description}</div>
          <div className="card__btns-container">
            <div className="card__details-btn"> DETAILS </div>
            <div className="card__add-to-cart">
              <button className="card__add-btn">ADD</button>
              <AiOutlineShoppingCart
                style={{
                  width: "20px",
                  height: "20px",
                  background: "rgb(68, 68, 157)",
                  padding: "5px",
                  borderRadius: "10%",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;

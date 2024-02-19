import "./OrderCard.scss";
import { orderCardTypes } from "./OrderCard.types";
const OrderCard = ({
  name,
  img,
  price,
  quantity,
  status,
  date,
}: orderCardTypes) => {
  return (
    <div className="orderCard">
      <div className="orderCard-left">
        <img
          src={img}
          className="object-contain"
          alt="orderItem"
          width="60px"
          height="60px"
        />
        <div>
          <h2 className="orderCard-left-title">{name}</h2>
          <h2 className="orderCard-left-price">
            {price}$ x {quantity}
          </h2>
        </div>
      </div>
      <div className="orderCard-right">
        <span className="orderCard-right-date">{date}</span>
        <span className={`orderCard-right-status-${status}`}>{status}</span>
      </div>
    </div>
  );
};

export default OrderCard;

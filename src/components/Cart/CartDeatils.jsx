import React from "react";
import "./Cart.css";
import plusIcon from "../../images/plus.png";
import minusIcon from "../../images/minus.png";
import trashIcon from "../../images/trash-bin.png";

const CartDeatils = ({ product, total, increase, decrease, removeProduct }) => {
  const { price, name, img, quantity } = product;
  return (
    <div className="p-1 m-1">
      <img src={img} alt="" className="img-fluid cart-img" />
      <p> $ {price}</p>
      <h6> {name} </h6>
      <p> quantity: {quantity}</p>

      <div className="p-5 m-2 d-flex justify-content-center align-items-center">
        <img
          src={plusIcon}
          alt=""
          className="img-fluid icons"
          onClick={() => increase(product)}
        />
        {quantity === 1 && (
          <img
            src={trashIcon}
            alt=""
            className="img-fluid icons"
            onClick={() => removeProduct(product)}
          />
        )}
        {quantity > 1 && (
          <img
            src={minusIcon}
            alt=""
            className="img-fluid icons"
            onClick={() => decrease(product)}
          />
        )}
      </div>
    </div>
  );
};

export default CartDeatils;

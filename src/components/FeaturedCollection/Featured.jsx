import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { isInCart } from "../../Utilities/helpers";
import "./featured.css";

const Featured = ({ product, hidden }) => {
  const { id, img, price, name } = product;

  const { addProduct, cartItems, increase } = useContext(CartContext);
  // console.log(cartItems);
  return (
    <div className="col-md-3 card featured-card ">
      <Link to={"/product/" + id}>
        <img src={img} alt="" className="featured-img" />
      </Link>
      <h6 className="featured-title"> {name}</h6>
      <p className="featured-price"> price: {price} </p>

      {!isInCart(product, cartItems) && (
        <button className="btn btn-warning" onClick={() => addProduct(product)}>
          Add to Cart
        </button>
      )}
      {isInCart(product, cartItems) && (
        <button className="btn btn-primary" onClick={() => increase(product)}>
          Add More
        </button>
      )}
    </div>
  );
};

export default Featured;

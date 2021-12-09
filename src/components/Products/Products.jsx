import React, { useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../context/cartContext";
import { ProductContext } from "../../context/ProductContext";
import { isInCart } from "../../Utilities/helpers";
import Featured from "../FeaturedCollection/Featured";

const Products = () => {
  const { productId } = useParams();
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  console.log(products);

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  const { name, img, price } = singleProduct;

  return (
    <div className="p-5 m-5 product d-flex">
      <img src={img} alt="" />
      <div className="p-5 m-5">
        <h4>{name}</h4>
        <h5>price: ${price} </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum
          fugit dolore tempora, voluptate dolor quod repellendus aliquid maiores
          et est similique asperiores dolorem, praesentium libero itaque,
          blanditiis iure ratione quaerat qui consectetur perferendis aperiam
          eum assumenda! Fuga, nesciunt tempora.
        </p>
        {!isInCart(products, cartItems) && (
          <button
            className="btn btn-primary"
            onClick={() => addProduct(products)}
          >
            {" "}
            Add To Cart
          </button>
        )}
        {isInCart(products, cartItems) && (
          <button
            className="btn btn-primary"
            onClick={() => increase(products)}
          >
            {" "}
            Add More in Cart
          </button>
        )}
        <button className="btn btn-primary"> Proceed To CheckOut</button>
      </div>
    </div>
  );
};

export default Products;

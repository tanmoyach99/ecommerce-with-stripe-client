import React, { useContext } from "react";
import { useHistory } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import Featured from "./Featured";

const FeaturedCollection = () => {
  const history = useHistory();
  const { products } = useContext(ProductContext);
  console.log(products);
  const featuredProduct = products
    .filter((product, i) => i > 3)
    .map((product) => <Featured product={product} id={product.id} />);

  return (
    <div className="mt-5">
      <div className="d-flex row justify-content-center align-items-center">
        {featuredProduct}
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/shop")}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default FeaturedCollection;

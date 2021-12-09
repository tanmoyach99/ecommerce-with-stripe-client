import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Featured from "../FeaturedCollection/Featured";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="p-5 mt-5 row d-flex align-items-center justify-content-center">
      {products.map((product) => (
        <Featured product={product} key={product.id} hidden></Featured>
      ))}
    </div>
  );
};

export default Shop;

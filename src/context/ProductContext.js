import React, { createContext, useState } from "react";

import { productsData } from "../Utilities/productData";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products] = useState(productsData);
  console.log(products);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

import axios from "axios";
import { useState, useEffect, createContext } from "react";

import React from "react";
export const ProductsContext = createContext();
export const ProductsModule = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  // console.log(products);
  return (
    <div>
      <ProductsContext.Provider value={{ products }}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
};

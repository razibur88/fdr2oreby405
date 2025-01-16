import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let productId = useParams();
  let [singleProduct, setSingleProduct] = useState({});

  let singleData = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    singleData();
  }, []);

  console.log(singleProduct);

  return (
    <div>
      <h2>ProductDetails</h2>
    </div>
  );
};

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
const ApiData = createContext();
const ContextApi = ({ children }) => {
  let [data, setData] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ApiData.Provider value={data}>{children}</ApiData.Provider>
    </>
  );
};

export { ContextApi, ApiData };

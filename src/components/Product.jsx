import React, { useEffect, useState } from "react";
import Container from "./Container";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import productImg from "../assets/img.png";
import axios from "axios";
const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) =>
      res.json().then((data) => setProductData(data.products))
    );
  }, []);
  //   useEffect(() => {
  //     axios
  //       .get("https://dummyjson.com/products")
  //       .then((data) => setProductData(data.data.products));
  //   }, []);

  return (
    <div className="mt-[118px] mb-[120px] font-dm">
      <Container>
        <h2 className="text-[39px] font-dm font-bold text-[#262626] pb-4">
          Product
        </h2>
        <div className="flex flex-wrap justify-between">
          {productData.slice(0, 4).map((product) => (
            <div className="w-[370px]">
              <div className="relative group overflow-y-hidden">
                <img className="w-full" src={product.thumbnail} alt="" />
                <div className="absolute top-[20px] left-[20px] bg-primary text-white font-bold py-[13px] px-[30px] inline-block">
                  New
                </div>
                <div className="w-full h-[0px] opacity-0 bg-[#fff] absolute bottom-0 left-0 group-hover:h-[150px] group-hover:opacity-100 duration-300 ease-in-out">
                  <ul className="pr-6 flex items-center h-full justify-end">
                    <div className="">
                      <li className="flex items-center gap-x-6 py-1 justify-end">
                        Add to Wish List <FaHeart />
                      </li>
                      <li className="flex items-center gap-x-6 py-1 justify-end">
                        Compare <IoMdGitCompare />
                      </li>
                      <li className="flex items-center gap-x-6 py-1 justify-end">
                        Add to Cart <FaCartArrowDown />
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <h3 className="text-[16px] font-dm font-bold text-[#262626]">
                  {product.title}
                </h3>
                <p className="text-[16px] font-dm font-normal text-[#767676]">
                  ${product.price}
                </p>
              </div>
              <h4 className="text-[16px] font-dm font-normal text-[#767676]">
                Black
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Product;

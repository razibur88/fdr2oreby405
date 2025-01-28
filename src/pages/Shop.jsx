import React, { useContext, useState } from "react";
import { FaRibbon } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { ApiData } from "../components/ContextApi";
import Pagination from "../components/pagination/Pagination";
import Post from "../components/pagination/Post";

const Shop = () => {
  let info = useContext(ApiData)
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(6)

  let lastPage = currentPage * perPage; 
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);

  let pageNumber = []

  for(let i = 0; i < Math.ceil(info.length / perPage); i++){
    pageNumber.push(i);
  }

  let paginate = (state)=>{
    setCurrentPage(state + 1);
  }

  
  




  return (
    <Container>
      <div className="max-w-container mx-auto py-[50px] flex justify-between">
        <div className="w-[15%]">
          <ul className="mb-[20px]">
            <h2 className="text-[20px] font-bold pb-[16px]">
              Shop by Category
            </h2>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <TbCategoryPlus /> Category 1
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <TbCategoryPlus /> Category 2
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <TbCategoryPlus /> Category 3
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <TbCategoryPlus /> Category 4
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <TbCategoryPlus /> Category 5
              </Link>
            </li>
          </ul>
          <ul className="mb-[20px]">
            <h2 className="text-[20px] font-bold pb-[16px]">Shop by Brand</h2>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <FaRibbon /> Brand 1
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <FaRibbon /> Brand 2
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <FaRibbon /> Brand 3
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <FaRibbon /> Brand 4
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                <FaRibbon /> Brand 5
              </Link>
            </li>
          </ul>
          <ul className="mb-[20px]">
            <h2 className="text-[20px] font-bold pb-[16px]">Shop by Price</h2>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                $0.00 - $9.99
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                $10.00 - $19.99
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                $20.00 - $29.99
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                $30.00 - $39.99
              </Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000]">
              <Link to="/shop" className="flex gap-3 items-center">
                $40.00 - Above
              </Link>
            </li>
          </ul>
        </div>
        <Post allPage={allPage} />
      </div>
      <div className="text-center pb-10">
        <Pagination pageNumber={pageNumber} paginate={paginate} />
      </div>
    </Container>
  );
};

export default Shop;

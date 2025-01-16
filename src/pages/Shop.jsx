import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import { FaRibbon } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaHeart, FaCartPlus } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import Container from "../components/Container";
import Post from "../components/pagination/Post";

const Shop = () => {
  return (
    <Container>
      <div className="max-w-container mx-auto py-[50px] flex justify-between">
        <div className="w-[15%]">
          <ul className="mb-[50px]">
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
          <ul className="mb-[50px]">
            <h2 className="text-[20px] font-bold pb-[16px]">Shop by Color</h2>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center">
              <div className="w-[11px] h-[11px] bg-[#000] rounded-[50%]"></div>
              <Link to="/shop">Color 1</Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center">
              <div className="w-[11px] h-[11px] bg-[#f00] rounded-[50%]"></div>
              <Link to="/shop">Color 2</Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center">
              <div className="w-[11px] h-[11px] bg-[#0f0] rounded-[50%]"></div>
              <Link to="/shop">Color 3</Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center">
              <div className="w-[11px] h-[11px] bg-[#00f] rounded-[50%]"></div>
              <Link to="/shop">Color 4</Link>
            </li>
            <li className="py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center">
              <div className="w-[11px] h-[11px] bg-[#ff0] rounded-[50%]"></div>
              <Link to="/shop">Color 5</Link>
            </li>
          </ul>
          <ul className="mb-[50px]">
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
          <ul className="mb-[50px]">
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
        <Post />
      </div>
    </Container>
  );
};

export default Shop;

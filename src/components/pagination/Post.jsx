import React, { useEffect, useState } from "react";
import { FaCartPlus, FaHeart, FaThList } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Post = ({ allPage, categoryFilter }) => {
  let [active, setActive] = useState("");
  let [showFilter, setShowFilter] = useState([]);
  let [count, setCount] = useState(true);
  let handleActive = () => {
    setActive("active");
  };

  useEffect(() => {
    let filterAmi = categoryFilter.slice(0, 5);
    setShowFilter(filterAmi);
  }, [categoryFilter]);

  let handleShow = () => {
    setShowFilter(categoryFilter);
    setCount(false);
  };
  let handleLess = () => {
    let filterAmi = categoryFilter.slice(0, 5);
    setShowFilter(filterAmi);
    setCount(true);
  };

  return (
    <div className="w-[83%] p-[10px]">
      <div className="heading bg-[#ededed] flex items-center p-[10px]">
        <div className="icon w-1/2 flex gap-3">
          <div
            onClick={() => setActive("")}
            className="p-[16px] hover:bg-[#000] hover:text-[#fff] duration-[1s]"
          >
            <IoGridSharp />
          </div>
          <div
            onClick={handleActive}
            className="p-[16px] hover:bg-[#000] hover:text-[#fff] duration-[1s]"
          >
            <FaThList />
          </div>
        </div>
        <div className="search w-1/2 flex justify-between">
          <div className="opt w-[48%] flex justify-end gap-3">
            <label htmlFor="cate">Sort By</label>
            <select name="cate" id="cate" className="w-[70%]  ">
              <option value="value1" className="text-right">
                Sort 1
              </option>
              <option value="value2" className="text-right">
                Sort 2
              </option>
              <option value="value3" className="text-right">
                Sort 3
              </option>
              <option value="value4" className="text-right">
                Sort 4
              </option>
              <option value="value5" className="text-right">
                Sort 5
              </option>
            </select>
          </div>
          <div className="opt w-[48%] flex justify-end gap-3">
            <label htmlFor="cateTwo">Show</label>
            <select name="cateTwo" id="cateTwo" className="w-[70%]">
              <option value="6" className="text-right">
                6
              </option>
              <option value="12" className="text-right">
                12
              </option>
              <option value="18" className="text-right">
                18
              </option>
            </select>
          </div>
        </div>
      </div>
      {showFilter.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-between">
            {showFilter.map((item) => (
              <div className="w-[32%] bg-[#f2f2f2] p-[20px] my-[10px]">
                <div className="thumb relative group">
                  <Link to={`${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="w-full h-[280px]"
                    />
                  </Link>
                  <div className="w-[80px] text-center absolute top-0 left-0 py-[5px] bg-[#000] text-[#fff]">
                    <p>{item.discountPercentage}%</p>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#fff] w-full opacity-0 group-hover:opacity-100 duration-[1s] m-[10px]">
                    <ul>
                      <li className="flex justify-end items-center gap-2 py-[10px]">
                        <p>Add to Wish List</p>
                        <FaHeart />
                      </li>
                      <li className="flex justify-end items-center gap-2 py-[10px]">
                        <p>Compare</p>
                        <FaCodeCompare />
                      </li>
                      <li className="flex justify-end items-center gap-2 py-[10px]">
                        <p>Add to Cart</p>
                        <FaCartPlus />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[16px]">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {count
              ? categoryFilter.length > 5 && (
                  <h3 onClick={handleShow}>show all</h3>
                )
              : categoryFilter.length > 5 && <h2 onClick={handleLess}>Less</h2>}
          </div>
        </>
      ) : (
        <div
          className={`${
            active == "active" ? "w-full" : "flex flex-wrap justify-between"
          }`}
        >
          {allPage.map((item) => (
            <div className="w-[32%] bg-[#f2f2f2] p-[20px] my-[10px]">
              <div className="thumb relative group">
                <Link to={`${item.id}`}>
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-[280px]"
                  />
                </Link>
                <div className="w-[80px] text-center absolute top-0 left-0 py-[5px] bg-[#000] text-[#fff]">
                  <p>{item.discountPercentage}%</p>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#fff] w-full opacity-0 group-hover:opacity-100 duration-[1s] m-[10px]">
                  <ul>
                    <li className="flex justify-end items-center gap-2 py-[10px]">
                      <p>Add to Wish List</p>
                      <FaHeart />
                    </li>
                    <li className="flex justify-end items-center gap-2 py-[10px]">
                      <p>Compare</p>
                      <FaCodeCompare />
                    </li>
                    <li className="flex justify-end items-center gap-2 py-[10px]">
                      <p>Add to Cart</p>
                      <FaCartPlus />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-[16px]">{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;

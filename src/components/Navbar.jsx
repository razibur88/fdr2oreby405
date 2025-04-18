import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { ImCross } from "react-icons/im";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser, FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import { ApiData } from "./ContextApi";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  let info = useContext(ApiData)
  let navigate = useNavigate()
  let data = useSelector((state) => state.product.cartItem);
  let [categoryShow, setCategoryShow] = useState(false);
  let [accShow, setAccShow] = useState(false);
  let [cartShow, setCartShow] = useState(false);
  let [search, setSearch] = useState("");
  let [searchFilter, setSearchFilter] = useState([])
  let cateRef = useRef();
  let accRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target)) {
        setCategoryShow(!categoryShow);
      } else {
        setCategoryShow(false);
      }
      if (accRef.current.contains(e.target)) {
        setAccShow(!accShow);
      } else {
        setAccShow(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
    });
  }, [categoryShow, accShow,cartShow]);

  let handleSearch = (e) => {
    setSearch(e.target.value);
    if(e.target.value == ""){
      setSearchFilter([])
    }else{
      let searchOne = info.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchFilter(searchOne);
    }
  };

  let handleSingleItem = (id) =>{
    navigate(`/shop/${id}`)
    setSearchFilter([])
    setSearch('')
    
  }
  

  return (
    <div className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className="justify-between items-center">
          <div className="w-[30%] relative">
            <div
              className="flex items-center gap-x-3 cursor-pointer"
              ref={cateRef}
            >
              <HiOutlineBars3BottomLeft />
              <h3>Shop by Category</h3>
            </div>
            {categoryShow && (
              <div className="absolute left-0 top-[63px] w-[300px] z-50">
                <ul className="bg-[#262626] py-6">
                  <li className="text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgba(255,255,255,70%)]">
                    Accesories
                  </li>
                  <li className="text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]">
                    Furniture
                  </li>
                  <li className="text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]">
                    Electronics
                  </li>
                  <li className="text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]">
                    Clothes
                  </li>
                  <li className="text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer">
                    Bags
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-[40%]">
            <div className="relative">
              <input
                onChange={handleSearch}
                type="search"
                placeholder="Search"
                className="w-full h-[50px] pl-4 rounded-lg"
                value={search}
              />
              <div className=" absolute top-[50%] translate-y-[-50%] right-[20px]">
                <FaSearch />
              </div>

              <div className="">
                {searchFilter.length > 0 &&
                <div className="h-[300px] w-[100%] bg-[gray] absolute left-0 top-[50px] z-[2] overflow-y-scroll">
                  <ul>
                    {searchFilter.map((item)=>(
                    <li onClick={()=>handleSingleItem(item.id)} className="py-2 text-white pl-3 cursor-pointer">{item.title}</li>
                    ))}
                  </ul>
                </div>
                }
              </div>
            </div>
          </div>
          <div className="w-[30%] relative">
            <div className="flex justify-end gap-x-6 items-center">
              <div ref={accRef} className="flex">
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <div ref={cartRef} className="relative cursor-pointer">
                <FaCartArrowDown />
                {data.length > 0 && (
                  <div className="absolute left-[10px] top-[-10px] w-[20px] h-[20px] bg-[#222] rounded-full text-white text-center leading-[20px]">
                    {data.length}
                  </div>
                )}
              </div>
            </div>
            {cartShow &&
           
               <div className="bg-[#F5F5F3] absolute right-0 top-[50px] w-[300px] z-10">
                {data.map((item)=>(
                  <>
                    <div className="pt-6 flex items-center">
                <div className="thumb w-[20%]">
                  <img
                    src={item.thumbnail}
                    alt="sample"
                    className="w-full"
                  />
                </div>
                <h2 className="w-[65%]">{item.title}</h2>

                <div>
                  <ImCross />
                </div>
                </div>
                
                  </>
                ))}
                <div className="mt-5 pb-6">
              <Link to="/cart" className="py-3 px-5 bg-[#262626] text-white inline-block mr-3">
               View Cart
              </Link>
              <Link to="/checkout" className="py-3 px-5 bg-[#262626] text-white inline-block"
              >
                CheckOut
              </Link>
                </div>
                
               </div>
           
            
             
             
        
            }
            {accShow && (
              <div className="absolute top-[150%] left-[190px] w-[150px] z-50">
                <ul className="bg-[#262626]">
                  <li className="text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]">
                    my Account
                  </li>
                  <li className="text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]">
                    logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Logo from "../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  let [show, setShow] = useState(false);
  return (
    <div className="py-[30px]">
      <Container>
        <div className="lg:flex justify-between items-center">
          <div className="">
            <img src={Logo} alt="logo" />
          </div>
          <div className="">
            <ul className="lg:flex">
              <li className="font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out">
                Home
              </li>
              <li className="font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out">
                <Link to="/about">About</Link>
              </li>
              <li className="font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out">
                Journal
              </li>
              <li to="/register" className="font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out">
                
                <Link to="/register">
                Register
                </Link>
              </li>
              <li className="font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out">
                <Link to="/login">
                Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden" onClick={() => setShow(!show)}>
            {show ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

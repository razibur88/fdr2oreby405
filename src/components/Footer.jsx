import React from "react";
import logo from "../assets/logo.png";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="footer bg-[#d6d6d6]">
      <Container>
        <div className="max-w-container mx-auto py-[50px] flex justify-between">
          <div className="items w-[15%]">
            <ul>
              <h2 className="font-bold pb-[16px]">MENU</h2>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Home</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Shop</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">About</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Contact</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Journal</a>
              </li>
            </ul>
          </div>
          <div className="items w-[15%]">
            <ul>
              <h2 className="font-bold pb-[16px]">SHOP</h2>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Category 1</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Category 2</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Category 3</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Category 4</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Category 5</a>
              </li>
            </ul>
          </div>
          <div className="items w-[15%]">
            <ul>
              <h2 className="font-bold pb-[16px]">HELP</h2>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Special E-shop</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Shipping</a>
              </li>
              <li className="py-[6px] text-[#6D6D6D] hover:text-[#000]">
                <a href="#">Secure Payments</a>
              </li>
            </ul>
          </div>
          <div className="items w-[15%]">
            <h2 className="font-bold pb-[16px]">(052) 611-5711</h2>
            <h2 className="font-bold pb-[16px]">company@domain.com</h2>
          </div>
          <div className="items w-[35%] relative">
            <img src={logo} alt="logo" className="pb-[16px]" />
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              fugiat necessitatibus, laborum quasi ratione nisi odit eveniet id
              magni illo, iste dolore ullam laboriosam autem!
            </p>
            <p className="text-[#6D6D6D] absolute bottom-0 right-0">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

import React from 'react'
import BanImg from "../assets/banner.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position:"absolute",
                left:"5%",
                top:"50%",
                transform:"translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "25px",
                color: "transparent",
                padding: "10px 0",
                borderRight: "2px white solid"
              }}
            >
              0{i + 1}
            </div>
          )
      };
  return (
    <Slider {...settings}>
        <div className="">
           <a href="">
           <img className='w-full' src={BanImg} alt="" />
           </a>
        </div>
        <div className="">
           <a href="">
           <img className='w-full' src={BanImg} alt="" />
           </a>
        </div>
        <div className="">
           <a href="">
           <img className='w-full' src={BanImg} alt="" />
           </a>
        </div>
        <div className="">
           <a href="">
           <img className='w-full' src={BanImg} alt="" />
           </a>
        </div>
        </Slider>
  )
}

export default Banner
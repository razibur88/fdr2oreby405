import React, { useEffect, useState } from 'react'
import Container from './Container'
import Img from "../assets/img.png"
import { FaHeart,FaCartArrowDown  } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position:"absolute", right:"0",top:"42%", height:"40px",width:"40px", borderRadius:"50%", background:"#d8d8d8",display:"flex", justifyContent:"center", alignItems:"center",  transform: "translateY(-50%)", zIndex:"1", color:"white",cursor:"pointer" }}
        onClick={onClick}
      ><FaArrowRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position:"absolute", left:"0",top:"42%", height:"40px",width:"40px", borderRadius:"50%", background:"red",display:"flex", justifyContent:"center",background:"#d8d8d8", alignItems:"center",  transform: "translateY(-50%)", zIndex:"1",color:"white", cursor:"pointer" }}
        onClick={onClick}
      ><FaArrowLeft/></div>
    );
  }

const NewArrivals = () => {
    var newSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
        }
    let [data, setData] = useState([])
    let getData = ()=>{
        axios.get("https://dummyjson.com/products").then((response)=>{
            setData(response.data.products);
        })
    }

    useEffect(()=>{
        getData()
    },[])

    
  return (
    <div>
        <Container>
            <h2 className='text-[39px] font-dm font-bold text-[#262626] pb-4'>New Arrivals</h2>
        
                <Slider {...newSlider}>
                {data.map((item)=>(
                    <div className="!w-[95%]">
                        <div className="relative group overflow-y-hidden">
                                <img className='w-full' src={item.thumbnail} alt="" />
                                <div className="w-full h-[0px] opacity-0 bg-[#fff] absolute bottom-0 left-0 group-hover:h-[150px] group-hover:opacity-100 duration-300 ease-in-out">
                                        <ul className='pr-6 flex items-center h-full justify-end'>
                                        <div className="">
                                        <li className='flex items-center gap-x-6 py-1 justify-end'>Add to Wish List <FaHeart/></li>
                                            <li className='flex items-center gap-x-6 py-1 justify-end'>Compare <IoMdGitCompare/></li>
                                            <li className='flex items-center gap-x-6 py-1 justify-end'>Add to Cart <FaCartArrowDown /></li>
                                        </div>
                                        </ul>
                                </div>
                        </div>
                        <div className="flex justify-between items-center">
                                <h3 className='text-[16px] font-dm font-bold text-[#262626]'>{item.title}</h3>
                                <p className='text-[16px] font-dm font-normal text-[#767676]'>${item.price}</p>
                            </div>
                            <h4 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h4>
                    </div>
                ))}
                </Slider>
         
        </Container>

    </div>
  )
}

export default NewArrivals
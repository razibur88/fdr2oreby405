import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser,FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
    let [categoryShow, setCategoryShow] = useState(false)
    let [accShow, setAccShow] = useState(false)
    let cateRef = useRef()
    let accRef = useRef()

    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(cateRef.current.contains(e.target)){
                setCategoryShow(!categoryShow)
            }else{
                setCategoryShow(false)
            }
            if(accRef.current.contains(e.target)){
                setAccShow(!accShow)
            }else{
                setAccShow(false) 
            }
        })
    },[categoryShow,accShow])


  return (
    <div className='bg-[#F5F5F3] py-[25px]'>
        <Container>
        <Flex className="justify-between items-center">
            <div className="w-[30%] relative">
                <div className="flex items-center gap-x-3 cursor-pointer" ref={cateRef}>
                    <HiOutlineBars3BottomLeft/>
                    <h3>Shop by Category</h3>
                </div>
            {categoryShow &&
                <div className="absolute left-0 top-[63px] w-[300px] z-50">
                    <ul className='bg-[#262626] py-6'>
                        <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgba(255,255,255,70%)]'>Accesories</li>
                        <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]'>Furniture</li>
                        <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]'>Electronics</li>
                        <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]'>Clothes</li>
                        <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer'>Bags</li>
                      
                    </ul>
                </div>
                }
            </div>
            <div className="w-[40%]">
                <div className="relative">
                    <input type="search" placeholder='Search' className='w-full h-[50px] pl-4 rounded-lg' />
                    <div className=" absolute top-[50%] translate-y-[-50%] right-[20px]">
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className="w-[30%] relative">
                <div className="flex justify-end gap-x-6 items-center">
                    <div ref={accRef} className="flex">
                        <FaUser/>
                        <IoMdArrowDropdown/>
                    </div>
                    <FaCartArrowDown/>
                </div>
                {accShow && 
                <div className="absolute top-[150%] left-[190px] w-[150px] z-50">
                    <ul className='bg-[#262626]'>
                        <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]'>my Account</li>
                        <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[rgb(255,255,255,70%)]'>logout</li>
                    </ul>
                </div>
                }

            </div>
        </Flex>
        </Container>
    </div>
  )
}

export default Navbar

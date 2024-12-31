import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='py-[30px]'>
        <Container>
           <Flex className="justify-between items-center">
                <div className="">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="">
                    <ul className='flex'>
                        <li className='font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out'>Home</li>
                        <li className='font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out'>Shop</li>
                        <li className='font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out'>About</li>
                        <li className='font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out'>Contacts</li>
                        <li className='font-dm text-[16px] hover:font-bold font-normal text-[#262626] px-6 duration-300 ease-in-out'>Journal</li>
                    </ul>




                </div>
           </Flex>
        </Container>
    </div>
  )
}

export default Header

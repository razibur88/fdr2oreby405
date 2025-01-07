import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Sm1 from "../assets/big.png"
import Sm2 from "../assets/sam1.png"
import Sm3 from "../assets/sma2.png"

const Addsale = () => {
  return (
    <div className="py-10">
        <Container>
        <Flex className="justify-between">
            <div className="w-[48%]">
                <div className="">
                    <a href="#"><img src={Sm1} alt="" /></a>
                </div>
            </div>
            <div className="w-[48%]">
                <div className="">
                    <a href="#">
                    <img src={Sm2} alt="" />
                    </a>
                </div>
                <div className="pt-8">
                    <a href="#">
                    <img src={Sm3} alt="" />
                    </a>
                </div>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Addsale
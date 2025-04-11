import React from 'react'
import Container from '../components/Container'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const Checkout = () => {
    let data = useSelector((state) => state.product.cartItem);
    let {totalPrice, totalQuantity} = data.reduce((acc, item)=>{
        acc.totalPrice += item.price * item.qun
        acc.totalQuantity += item.qun
        return acc
    
      },{totalPrice:0, totalQuantity:0})
    
      let ami = totalPrice * 15 / 100
  return (
    <Container>
        <div>Checkout</div>
        

<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">CheckOut</a>
      </div>
    </li>
    
  </ol>
</nav>

<div className="">
    <h5>User Name : Utso</h5>
    <h5>User Email : Demo@gmail.com</h5>
</div>

<div className="total flex justify-end py-[50px] flex-col items-end">
              <ul className="w-[20%]">
                
                <li className="flex gap-3 justify-between">
                  <h2>Quantity</h2> <h2>${totalQuantity}</h2>
                </li>
                
                
                <li className="flex gap-3 justify-between">
                  <h2>Subtotal</h2> <h2>${totalPrice.toFixed(2)}</h2>
                </li>
                <li className="flex gap-3 justify-between">
                  <h2>Vat</h2> <h2>${ ami.toFixed(2) }</h2>
                </li>
                <li className="flex gap-3 justify-between">
                  <h2>Total</h2> <h2>${(totalPrice + ami).toFixed(2)}</h2>
                </li>
              </ul>
              <Link
               
                className="py-[16px] px-[24px] bg-[#000] text-[#fff] font-bold my-[20px]"
              >
               Payment
              </Link>
            </div>

    </Container>
  )
}

export default Checkout
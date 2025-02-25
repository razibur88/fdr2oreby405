import { ImCross } from "react-icons/im";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import {
  decrementProduct,
  incrementProduct,
} from "../components/slice/productSlice";

const Cart = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.product.cartItem);

  let handleIncrement = (index) => {
    dispatch(incrementProduct(index));
  };
  let handleDecrement = (index) => {
    dispatch(decrementProduct(index));
  };

  return (
    <div>
      <Container>
        <nav class="flex py-[10px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link
                to="/"
                href="#"
                class="inline-flex items-center text-[18px] font-medium text-[#767676]"
              >
                Home
              </Link>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  to="/shop"
                  href="#"
                  class="ms-1 text-[18px] font-medium text-[#767676]"
                >
                  Products
                </Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="cart py-[50px]">
          <div className="max-w-container mx-auto">
            <h2 className="text-[40px] font-bold">Cart</h2>
            <div className="heading w-full bg-[#F5F7F7]">
              <ul className="flex p-[10px] justify-between">
                <li className="w-[20%] font-bold p-[10px]">Product</li>
                <li className="w-[20%] font-bold p-[10px]">Price</li>
                <li className="w-[20%] font-bold p-[10px]">Quantity</li>
                <li className="w-[20%] font-bold p-[10px]">Total</li>
              </ul>
              {data.map((item, i) => (
                <ul className="flex p-[10px] items-center justify-between">
                  <li className="w-[20%] font-bold p-[10px] flex justify-between items-center">
                    <div className="cross w-[10%]">
                      <ImCross />
                    </div>
                    <div className="thumb w-[20%]">
                      <img
                        src={item.thumbnail}
                        alt="sample"
                        className="w-full"
                      />
                    </div>
                    <h2 className="w-[65%]">{item.title}</h2>
                  </li>
                  <li className="w-[20%] font-bold p-[10px]">{item.price}</li>
                  <li className="w-[20%] font-bold p-[10px] relative">
                    <h2 className="text-left px-[20px]">{item.qun}</h2>
                    <div className="arrows flex flex-col absolute top-[50%] right-0 translate-y-[-50%]">
                      <div className="" onClick={() => handleIncrement(i)}>
                        <TfiArrowCircleUp />
                      </div>
                      <div className="" onClick={() => handleDecrement(i)}>
                        <TfiArrowCircleDown />
                      </div>
                    </div>
                  </li>
                  <li className="w-[20%] font-bold p-[10px]">
                    ${item.price * item.qun}
                  </li>
                </ul>
              ))}
            </div>
            <div className="total flex justify-end py-[50px] flex-col items-end">
              <ul className="w-[20%]">
                <li className="flex gap-3 justify-between">
                  <h2>Subtotal</h2> <h2>$0</h2>
                </li>
                <li className="flex gap-3 justify-between">
                  <h2>Total</h2> <h2>$0</h2>
                </li>
              </ul>
              <Link
                to="/"
                className="py-[16px] px-[24px] bg-[#000] text-[#fff] font-bold my-[20px]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Cart;

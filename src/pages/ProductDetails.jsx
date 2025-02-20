import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Container from "../components/Container";
import { addToCart } from "../components/slice/productSlice";

const ProductDetails = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let productId = useParams();
  let [singleProduct, setSingleProduct] = useState({});

  let singleData = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    singleData();
  }, [productId]);

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return singleProduct.rating > index + 1 ? (
      <IoMdStar />
    ) : singleProduct.rating > number ? (
      <IoMdStarHalf />
    ) : (
      <IoMdStarOutline />
    );
  });

  let handleCart = (item) => {
    dispatch(addToCart({...item, qun: 1 }));
    toast("Wow so easy!");
    setTimeout(() => {
      navigate("/cart");
    }, [2000]);
  };

  // <IoMdStarHalf />

  return (
    <section>
      <Container>
        <nav class="flex py-[10px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link
                to="/"
                href="#"
                class="inline-flex items-center text-[18px] font-medium text-[#767676] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
                  class="ms-1 text-[18px] font-medium text-[#767676] hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Products
                </Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex justify-center py-[60px]">
          <div className="w-[40%]">
            <img src={singleProduct.thumbnail} alt="" />
          </div>

          <div className="w-[40%]">
            <h3 className="font-dm">Products</h3>
            <div className="text-[20px] flex items-center gap-1">
              {clientRating}
              {/* <IoMdStarOutline /> */}
              <span className="font-dm font-normal text-[#767676] text-[14px]">
                {" "}
                {singleProduct?.reviews?.length}
              </span>
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="mt-5">
              <a className="py-5 px-10 bg-[#262626] text-white inline-block mr-3">
                Add To Wishlist
              </a>
              <a
                onClick={() => handleCart(singleProduct)}
                className="py-5 px-10 bg-[#262626] text-white inline-block"
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;

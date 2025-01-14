import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Addsale from "../components/Addsale";
import NewArrivals from "../components/NewArrivals";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Addsale />
      <NewArrivals />
      <Product />
    </div>
  );
};

export default Home;

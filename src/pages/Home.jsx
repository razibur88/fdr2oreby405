import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Addsale from "../components/Addsale";
import NewArrivals from "../components/NewArrivals";
import BestPhone from "../components/BestPhone";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Addsale />
      <NewArrivals />
      <BestPhone />
    </div>
  );
};

export default Home;

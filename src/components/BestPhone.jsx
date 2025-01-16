import React from "react";
import bestphone from "../assets/ads4.png";
import Container from "./Container";

const BestPhone = () => {
  return (
    <Container>
      <div className="max-w-container mx-auto my-[50px]">
        <img src={bestphone} alt="best Phone" />
      </div>
    </Container>
  );
};

export default BestPhone;

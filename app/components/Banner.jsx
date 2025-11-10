import React from "react";
import bgImg from "../../public/bg-plant.png";

const Banner = () => {
  return (
    <>
      <section
        className="main w-full h-[2500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      ></section>
    </>
  );
};

export default Banner;

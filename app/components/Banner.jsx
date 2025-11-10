import React from "react";
import bgImg from "../../public/bg-plant.png";

const Banner = () => {
  return (
    <>
      <section
        className="main w-full h-[2500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
            <div className="left">
                <h1 className="text-[117px] text-white font-semibold font-inter text-backdrop-blur">Breath Natureal </h1>
            </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

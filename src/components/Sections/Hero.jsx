import React, { useState } from "react";
import Client from "./Client";

const Hero = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      id="home"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      className="bg-no-repeat bg-cover"
    >
      <section
        className="wrapper lg:pt-[188px]  "
        onMouseEnter={() => {
          setRotate(true);
        }}
        onMouseLeave={() => {
          setRotate(false);
        }}
      >
        <div className="container py-[60px] lg:pb-[128px]  flex flex-col lg:flex-row gap-[40px] items-center">
          <h1 className="text-h1 text-center lg:text-start lg:max-w-[700px]  order-2 lg:order-1">
            <span className="text-action"> Unlock Your Digital Potential.</span>{" "}
            <span className="text-white font-normal">
              {" "}
              Discover the Possibilities. Achieve Digital Success.
            </span>
          </h1>
          <div className="flex order-1 lg:order-2 flex-col relative mt-[98px] flex-shrink-0 ">
            <img
              src="/images/hero-thumb-purple.png"
              alt="img"
              className={` lg:block absolute w-[178px] lg:w-auto transition-transform duration-[3000ms] 
               left-[180px] lg:left-[60px] -top-[40px] lg:-top-[70px]  ${
                 rotate && "rotate-[60deg]"
               }`}
            />
            <img
              src="/images/hero-thumb-blue.png"
              alt="img"
              className={` lg:block absolute w-[79px] lg:w-auto top-[45px] lg:top-[70px] left-[240px] lg:left-[180px] transition-transform duration-[3000ms]  ${
                rotate && "rotate-[-60deg]"
              }`}
            />
            <img
              src="/images/hero-thumb.png"
              alt="img"
              className=" lg:block aboluste z-10"
            />
          </div>
        </div>
      </section>
      <div className="relative top-[1px]">
        <Client />
      </div>
    </div>
  );
};

export default Hero;

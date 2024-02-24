import React from "react";
import Client from "./Client";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      className="bg-no-repeat bg-cover"
    >
      <section className="wrapper lg:pt-[188px]  ">
        <div className="container py-[60px] lg:pb-[128px]  flex flex-col lg:flex-row gap-[40px] items-center">
          <h1 className="text-h1 text-center lg:text-start lg:max-w-[700px]  order-2 lg:order-1">
            <span className="text-action"> Unlock Your Digital Potential.</span>{" "}
            <span className="text-white font-normal">
              {" "}
              Discover the Possibilities. Achieve Digital Success.
            </span>
          </h1>
          <div className="flex order-1 lg:order-2 flex-col">
            <img
              src="/images/hero-thumb-mob.png"
              alt="img"
              className="lg:hidden block"
            />
            <img
              src="/images/hero-img.png"
              alt="img"
              className="hidden lg:block"
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

import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Client = () => {
  const [images, setImages] = useState([
    "/images/clients/c1.png",
    "/images/clients/c2.png",
    "/images/clients/c3.png",
    "/images/clients/c4.png",
    "/images/clients/c5.png",
    "/images/clients/c6.png",
    "/images/clients/c7.png",
    "/images/clients/c8.png",
    "/images/clients/c9.png",
  ]);

  return (
    <div
      className="pt-[50px] md:pt-[60px] lg:pt-[106px] pb-[87px]  bg-no-repeat bg-cover bg-right md:bg-[position:unset]"
      style={{ backgroundImage: "url('/images/bgclient.png')" }}
    >
      <h5 className="text-[24px] font-bold text-center">Our Client</h5>
      <div className="mt-10">
        <Marquee autoFill>
          {images.map((r, i) => {
            return (
              <div className="px-[26px]" key={`client-${i}`}>
                <img src={r} alt="image" className="" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Client;

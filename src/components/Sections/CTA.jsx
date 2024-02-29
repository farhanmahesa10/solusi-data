import React from "react";
import ButtonContact from "../Button/ButtonContact";

const CTA = () => {
  return (
    <div
      className="wrapper bg-no-repeat bg-cover bg-left-top relative z-10"
      style={{ backgroundImage: "url('/images/cta-bg.png')" }}
      id="contact"
    >
      <div className="container  bg-left pt-[224px] pb-[206px]">
        <h2 className="text-h2 text-action lg:text-[42px]">
          Let's start building together
        </h2>
        <p className="text-18-to-24 text-[#D6DEEB] mt-3">
          Unlock Your Digital Potential with Solusi Data - Let Us Help You
          Create the Perfect Solution.
        </p>

        <div className="mt-[24px] lg:mt-[44px]">
          <ButtonContact />
        </div>
      </div>
    </div>
  );
};

export default CTA;

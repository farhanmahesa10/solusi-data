import React from "react";

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
          <button className="btn-primary bg-white items-center h-fit px-[24px]">
            <img
              src="/images/svg/plane.svg"
              alt="plane icon"
              className="pr-[18px]"
            />

            <span className="text-primary  text-[22px] pl-[18px] border-l border-[#C4CFE2]">
              Contact
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;

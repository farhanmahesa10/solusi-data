import React from "react";

const Footer = () => {
  return (
    <div className="wrapper bg-black">
      <div className="container py-[50px]">
        <div className="flex w-full gap-[32px] md:gap-[60px] lg:gap-[240px] flex-col lg:flex-row">
          <div className="w-full lg:max-w-[500px] text-center lg:text-start">
            <h3 className="text-white text-[24px] lg:text-[32px] leading-[32px] lg:leading-[43px] font-bold ">
              SOLDAT HQ
            </h3>
            <div className="mt-5">
              <p className="font-bold text-white text-[17px] leading-[23px]">
                PT. Solusi Data Pratama
              </p>
              <p className="text-white text-[14px] lg:text-[17px] leading-[19px] lg:leading-[23px]">
                Jalan Joglo Raya No 52, kembangan Jakarta Barat 11640 Indonesia
              </p>
            </div>
            <div className="mt-[30px] flex gap-4 flex-col lg:flex-row items-center">
              <button className=" rounded-[4px] bg-white flex w-fit ">
                <span className="px-4 mt-4  ">
                  <img
                    src="/images/svg/phoneblack.svg"
                    alt="icon"
                    className=" "
                  />
                </span>

                <span className="py-2 px-4 text-primary font-medium border-[#E3E3E3] border-l whitespace-nowrap">
                  (+62) 8119898286
                </span>
              </button>
              <button className=" rounded-[4px] bg-white flex ">
                <span className="px-4 mt-4  ">
                  <img
                    src="/images/svg/mailblack.svg"
                    alt="icon"
                    className=" "
                  />
                </span>

                <span className="py-2 px-4 text-primary font-medium border-[#E3E3E3] border-l">
                  akbar@solusidata.co.id
                </span>
              </button>
            </div>
          </div>
          <div className="text-center lg:text-start">
            <h6 className="text-white font-bold text-[18px] leading-[24px] ">
              Layanan
            </h6>
            <p className="mt-[21px] text-[14px] leading-[19px] text-white">
              Digital Consulting Services
            </p>
            <p className="mt-[14px] text-[14px] leading-[19px] text-white">
              Web Design & Development{" "}
            </p>
            <p className="mt-[14px] text-[14px] leading-[19px] text-white">
              Digital Marketing
            </p>
            <p className="mt-[14px] text-[14px] leading-[19px] text-white">
              Mobile App Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

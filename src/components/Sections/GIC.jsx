import React from "react";

const GIC = () => {
  return (
    <div className="bg-black -z-20 relative">
      <div
        className="wrapper pt-[163px]  bg-gradient-to-t from-black to-white relative -top-[100px] -z-10"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(255,255,255,0)), url('/images/gic-bg.png')`,
        }}
      >
        <div className="container">
          <div className="flex gap-[43px] lg:gap-[90px] items-end flex-col lg:flex-row">
            <div className="lg:max-w-[602px] w-full">
              <h2 className="text-h2 text-white">Get in touch</h2>
              <p className="text-[23px] leading-[32px] text-white">
                If you have any questions or would like to learn more about our
                services, please don’t hesitate to contact us.
              </p>
              <div className="mt-6 bg-white rounded-[5px] gap-2 lg:gap-0 p-6 flex  justify-between flex-wrap">
                <div className="flex gap-2 items-start">
                  <img
                    src="/images/svg/map.svg"
                    alt="icon"
                    className="flex-shrink-0 flex-grow-0"
                  />
                  <div>
                    <p className="font-bold text-[14px] leading-[19px] text-primary">
                      Address:
                    </p>
                    <p className="text-[14px] leading-[19px] text-primary whitespace-nowrap">
                      Jalan Joglo Raya no 52B
                    </p>
                  </div>
                </div>
                <div className="h-[38px] w-[1px] bg-[#C4CFE2] mx-2 hidden lg:block"></div>
                <div className="flex gap-2 items-start">
                  <img
                    src="/images/svg/mail.svg"
                    alt="icon"
                    className="flex-shrink-0 flex-grow-0"
                  />
                  <div>
                    <p className="font-bold text-[14px] leading-[19px] text-primary">
                      Email:
                    </p>
                    <p className="text-[14px] leading-[19px] text-primary">
                      akbar@solusidata.co.id
                    </p>
                  </div>
                </div>
                <div className="h-[38px] w-[1px] bg-[#C4CFE2] mx-2 hidden lg:block"></div>
                <div className="flex gap-2 items-start">
                  <img
                    src="/images/svg/phonecall.svg"
                    alt="icon"
                    className="flex-shrink-0 flex-grow-0"
                  />
                  <div>
                    <p className="font-bold text-[14px] leading-[19px] text-primary">
                      Phone:
                    </p>
                    <p className="text-[14px] leading-[19px] text-primary whitespace-nowrap">
                      +62 8119898286
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" border border-action bg-white p-[24px] w-full  lg:max-w-[548px] "
              style={{ boxShadow: "8px 8px 0px 0px #01B3BF" }}
            >
              <h2 className="text-[24px] lg:text-[32px] leading-[32px] lg:leading-[43px] font-bold">
                Drop us email for further
              </h2>

              <div className="mt-[24px]">
                <div className="">
                  <label className="text-[12px] leading-[16px]">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border 
                  border-[#FAFAFA] bg-[#FAFAFA] py-4 px-3 text-[14px] leading-[19px] w-full 
                  focus:outline focus:outline-[#47B2E4] rounded-[4px] focus:bg-[#F5FEFF]"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-[12px] leading-[16px]">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="border 
                  border-[#FAFAFA] bg-[#FAFAFA] py-4 px-3 text-[14px] leading-[19px] w-full 
                  focus:outline focus:outline-[#47B2E4] rounded-[4px] focus:bg-[#F5FEFF]"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-[12px] leading-[16px]">Subject</label>
                  <input
                    placeholder="mail subject"
                    type="text"
                    className="border 
                  border-[#FAFAFA] bg-[#FAFAFA] py-4 px-3 text-[14px] leading-[19px] w-full 
                  focus:outline focus:outline-[#47B2E4] rounded-[4px] focus:bg-[#F5FEFF]"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-[12px] leading-[16px]">Message</label>
                  <textarea
                    rows={5}
                    type="text"
                    placeholder="your message"
                    className="border 
                  border-[#FAFAFA] bg-[#FAFAFA] py-4 px-3 text-[14px] leading-[19px] w-full 
                  focus:outline focus:outline-[#47B2E4] rounded-[4px] focus:bg-[#F5FEFF]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GIC;

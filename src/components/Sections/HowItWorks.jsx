import React, { useMemo, useState } from "react";

const HowItWorks = () => {
  const [activeDataKey, setActiveDataKey] = useState("5");

  const [data, setdata] = useState([
    {
      key: "1",
      bg: "/images/hiw-bg-1.webp",
      number: "01",
      title: "Understand the Client’s Needs",
      desc: "We start by listening to the client’s needs and requirements. We work with the client to define the scope of the project, the desired outcomes, and the timeline for delivery.",
    },
    {
      key: "2",
      bg: "/images/hiw-bg-2.webp",
      number: "02",
      title: "Research the Market",
      desc: "We conduct detailed market research to gain insights into the current trends and technologies in the field. We use this research to develop an understanding of the target audience and to identify potential solutions.",
    },
    {
      key: "3",
      bg: "/images/hiw-bg-3.webp",
      number: "03",
      title: "Develop Solutions",
      desc: "We use our expertise and creative thinking to develop tailor-made solutions that meet the client’s needs. We work with the client to ensure that the proposed solutions are comprehensive and address all aspects of the project.",
    },
    {
      key: "4",
      bg: "/images/hiw-bg-4.webp",
      number: "04",
      title: "Design and Build",
      desc: "We design and build the digital solution to the highest standards. We use the latest technologies and best practices to ensure that the solution is secure, reliable, and user-friendly.",
    },
    {
      key: "5",
      bg: "/images/hiw-bg-5.webp",
      number: "05",
      title: "Test and Refine",
      desc: "We start by listening to the client’s needs and requirements. We work with the client to define the scope of the project, the desired outcomes, and the timeline for delivery.",
    },
    {
      key: "6",
      number: "06",
      bg: "/images/hiw-bg-6.webp",
      title: "Launch and Support",
      desc: "We launch the digital, We also provide ongoing support.",
    },
  ]);

  const activeData = useMemo(() => {
    return data.find((r) => r.key === activeDataKey) || null;
  }, [activeDataKey, data]);

  return (
    <div
      className="wrapper flex-col md:flex-row bg-cover pt-[50px] md:pt-[147px] pb-[60px] md:pb-[170px] relative md:min-h-[1000px] bg-center transition-all duration-300"
      style={{ backgroundImage: `url('${activeData?.bg}')` }}
    >
      <div className="absolute top-[-1px] z-10 hidden md:block max-h-[131px] w-full 3xl:hidden">
        <img src="/images/hiw-cutter.png" alt="hiw" />
      </div>
      <div className="container ">
        <h2 className="text-center text-h2 text-white">How We Work</h2>
        <p className="text-18-to-24 text-center text-[#F5F5F5CC]">
          Solusi Data provides exceptional digital solutions, utilizing
          innovative technology and best practices to create secure, reliable,
          and user-friendly solutions.
        </p>
      </div>
      <div className="absolute md:-bottom-[1px] z-10 rotate-[180deg] w-full hidden md:block pb-2  max-h-[131px] 3xl:hidden">
        <img src="/images/hiw-cutter.png" alt="hiw" />
      </div>

      <div className="md:absolute top-0 h-full w-full z-[5] mt-[45px] md:mt-0 ">
        <div className="wrapper h-full">
          <div className="container pt-[16px] px-0  flex flex-col md:flex-row h-full justify-between  ">
            {data.map((r) => {
              return (
                <div
                  key={r.key}
                  className="flex  md:h-full items-end  px-[8px] py-[9px] md:py-0 md:pb-[170px] w-full
                   hover:hiw-item-gradient-mob md:hover:hiw-item-gradient transition-all duration-300 ease-in-out
                   md:hover:border-none hover:border-l-4 hover:border-action
                   "
                  onMouseEnter={() => {
                    setActiveDataKey(r.key);
                  }}
                >
                  <div className="opacity-100">
                    <p className="text-white font-bold opacity-100">
                      {r.number}
                    </p>
                    <p className=" text-18-to-24 font-bold text-action">
                      {r.title}
                    </p>
                    {activeDataKey === r.key && (
                      <p className="text-[13px] lg:text-[17px] text-white">
                        {activeData?.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="service" data="targeted-service-id-dont-remove"></div>
      </div>
    </div>
  );
};

export default HowItWorks;

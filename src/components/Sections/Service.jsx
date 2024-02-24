import React, { useState } from "react";

const Service = () => {
  const [data, setData] = useState([
    {
      icon: "/images/svg/handshake.svg",
      title: "Digital Consulting Services",
      desc: "We offer custom digital consulting services to help our clients understand how to best leverage their digital solutions and stay ahead of the competition. ",
    },
    {
      icon: "/images/svg/codeblock.svg",
      bg: "/images/bg-service-card.png",
      titleColor: "text-white",
      title: "Web Design and Development",
      desc: "We provide professional web design and development services to ensure that our clients’ websites are attractive, well-structured, and easy to navigate.",
    },
    {
      icon: "/images/svg/megaphone.svg",
      bg: "",
      title: "Digital Marketing",
      desc: "Our digital marketing services will help you reach your target audience through various channels such as social media, search engine optimization, and pay-per-click advertising",
    },
    {
      icon: "/images/svg/appstore.svg",
      bg: "",
      title: "Mobile App Development",
      desc: "We specialize in creating custom mobile applications that are tailored to our clients’ needs. ",
    },
  ]);

  return (
    <div className="wrapper">
      <div className="container py-[50px]">
        <h2 className="text-h2">Our Services</h2>
        <p className="text-18-to-24 text-primary">
          Our team of experienced professionals works closely with our clients
          to develop creative and innovative solutions that meet their
          individual needs and exceed their expectations.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-[50px]">
          {data.map((r, i) => {
            return (
              <div
                key={`service-${i}`}
                className={`p-6 bg-no-repeat bg-right ${r.bg && "bg-black"}`}
                style={{
                  boxShadow: "4px 4px 0px 0px #47B2E4",
                  backgroundImage: `url('${r.bg}')`,
                }}
              >
                <img src={r.icon} alt="icon" className="flex-shrink-0" />
                <p
                  className={`${
                    r.bg && "text-[#DDE6F6]"
                  } font-bold py-3 text-[18px] lg:text-[22px] text-primary`}
                >
                  {r.title}
                </p>
                <p
                  className={`${
                    r.bg && "text-[#9EAABF]"
                  } text-[15px] lg:text-[17px] text-[#3F4E65] leading-[23px] lg:leading-[20px]`}
                >
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;

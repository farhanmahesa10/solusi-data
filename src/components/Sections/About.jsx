import React from "react";

const About = () => {
  return (
    <div
      className="wrapper py-[60px] relative  bg-no-repeat bg-[position:20px_500px] md:bg-[position:100px]"
      style={{ backgroundImage: "url('/images/about-bg.png')" }}
    >
      <div className="container">
        <div className="flex gap-[16px] flex-col lg:flex-row items-center">
          <div className="max-w-[765px]">
            <h6 className="text-[18px] lg:text-[24px] text-primary font-bold">
              About Us
            </h6>
            <h1 className="text-h2">
              We embrace <span className="text-action">Creativity</span> and{" "}
              <span className="text-action">Innovation</span>
            </h1>
            <p className="mt-6 text-20-to-24">
              We are an agency that strives to be the best in the digital
              solutions industry. Our corporate values emphasize the importance
              of creative thinking, innovative solutions, and staying ahead of
              the curve in the digital solutions industry.
            </p>
            <p className="text-14-to-18 mt-4 lg:mt-6">
              We believe that these values are essential for providing our
              clients with the best possible solutions and services, and for
              continuing to be leaders in the industry.
            </p>
          </div>
          <div className=" flex-shrink-0">
            <img src="/images/about-thum.png" alt="about thumnail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

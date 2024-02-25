import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="fixed top-0 w-full hidden md:block  z-[99] nav-gradient h-[188px]">
        <div className="wrapper">
          <div className="container ">
            <div className="flex justify-end">
              <div className=" fixed z-[99] left-3 hidden md:block">
                <img src="/images/badge-lg.png" alt="badge" />
              </div>
              <div className="py-[14px] flex gap-3 bg">
                <a href="#home">
                  <p className="py-2 px-4 text-white clickable text-[1rem]">
                    Home
                  </p>
                </a>
                <a href="#about">
                  <p className="py-2 px-4 text-white clickable text-[1rem]">
                    About
                  </p>
                </a>
                <a href="#service">
                  <p className="py-2 px-4 text-white clickable text-[1rem]">
                    Service
                  </p>
                </a>
                <a href="#contact">
                  <button className="btn-primary bg-white items-center h-fit ">
                    <img
                      src="/images/svg/plane.svg"
                      alt="plane icon"
                      className="pr-[18px]"
                    />

                    <span className="text-primary text-[1rem] pl-[18px] border-l border-[#C4CFE2]">
                      Contact
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile */}

      <section className=" w-full fixed z-[99] top-0 md:hidden ">
        <div
          className={`w-screen flex flex-col overflow-hidden transition-all duration-500 gap-3 bg-[#09101B] relative z-[50] ${
            !open ? "h-[60px] " : "h-[340px] "
          }`}
        >
          <div className=" pt-[143px]">
            <div className="px-6">
              {" "}
              <div className="w-full h-[1px] bg-primary "></div>
            </div>
            <a href="#home" onClick={() => setOpen(false)}>
              <p className="text-center py-2 px-5 text-white text-[16px] leading-[21px] clickable mt-4 ">
                Home
              </p>
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              <p className="text-center py-2 px-5 text-white text-[16px] leading-[21px] clickable">
                About
              </p>
            </a>
            <a href="#service" onClick={() => setOpen(false)}>
              <p className="text-center py-2 px-5 text-white text-[16px] leading-[21px] clickable">
                Service
              </p>
            </a>
            <div className="  mx-[24px] mt-3">
              <a href="#contact" onClick={() => setOpen(false)}>
                <button className="btn-primary bg-white items-center h-fit w-full z justify-center">
                  <img
                    src="/images/svg/plane.svg"
                    alt="plane icon"
                    className="pr-[18px]"
                  />

                  <span className="text-primary text-[1rem] pl-[18px] border-l border-[#C4CFE2]">
                    Contact
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={`flex relative -top-[60px]   z-[40]`}>
          <img
            src="/images/nav-badges.png"
            alt="nav"
            className="h-[153px] flex-grow-0 flex-shrink-0"
          />
          <img
            src="/images/nav-line.png"
            alt="nav"
            className="h-[153px] w-full "
          />
        </div>
        <div className="">
          <img
            src="/images/nav-logo-mob.png"
            alt="logo"
            className="fixed z-[100] w-[60px] left-[20px] top-[18px] "
          />
          <div className="fixed right-4 top-8 z-[100]">
            <img
              src={open ? "/images/svg/close.svg" : "/images/svg/hamburger.svg"}
              alt="burger"
              className="clickable"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

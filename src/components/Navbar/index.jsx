import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="fixed top-0 w-full hidden md:block  z-10 nav-gradient h-[188px]">
        <div className="wrapper">
          <div className="container ">
            <div className="flex justify-end">
              <div className=" fixed left-3 hidden md:block">
                <img src="/images/badge-lg.png" alt="badge" />
              </div>
              <div className="py-[14px] flex gap-3 bg">
                <p className="py-2 px-4 text-white clickable text-[1rem]">
                  Home
                </p>
                <p className="py-2 px-4 text-white clickable text-[1rem]">
                  About
                </p>
                <p className="py-2 px-4 text-white clickable text-[1rem]">
                  Service
                </p>
                <button className="btn-primary bg-white items-center h-fit">
                  <img src="/images/svg/plane.svg" alt="plane icon" />
                  <span className="p-1 border-r border-[#C4CFE2] h-full"></span>
                  <span className="text-primary text-[1rem]">Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile */}

      <section className="flex w-full fixed top-0 md:hidden">
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

        <div className="fixed right-4 top-8">
          <img
            src="/images/svg/hamburger.svg"
            alt="burger"
            className="clickable"
          />
        </div>
      </section>
    </>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const logo = {
  Compaine: require("@/shared/assets/compaine.svg"),
};
const icon = {
  Announcement: require("@/shared/icons/vuesax/outline/magic-star-black.svg"),
  Expand: require("@/shared/icons/vuesax/outline/more-blue.svg"),
  ArrowRight: require("@/shared/icons/vuesax/outline/arrow-right-black.svg"),
  ArrowUp: require("@/shared/icons/vuesax/outline/arrow-up-black.svg"),
};

const LandingNav = () => {
  const [expandLandingNav, setExpandLandingNav] = useState(true);

  const handleExpandLandingNav = () => {
    setExpandLandingNav(!expandLandingNav);
  };

  useEffect(() => {
    const expandLandingNavBreakpoints = window.innerWidth < 1024;
    setExpandLandingNav(!expandLandingNavBreakpoints);
  }, []);

  return (
    <nav
      className={`bg-[#F8F8FF]/10 lg:fixed top-0 z-10 flex flex-col lg:flex-row gap-8 lg:gap-4 items-center justify-between w-full ${
        expandLandingNav ? "h-screen lg:h-auto" : "h-auto"
      } backdrop-blur-lg p-8 lg:px-32 lg:py-4`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center justify-center lg:justify-start w-full lg:w-[40%]">
        <div className="flex flex-row gap-2 items-center justify-between w-full lg:w-auto h-auto mt-0">
          <button className="bg-transparent transition-all flex flex-row gap-2 items-center rounded-lg w-full lg:w-auto p-0 lg:px-4 lg:py-2">
            <p className="font-bold text-sm lg:text-sm tracking-tight text-start mt-0">
              <span className="text-[#3000E6]">C</span>
              <span className="text-[#FF03FF]">o</span>
              <span className="text-[#3000E6]">mpaine</span>
            </p>
          </button>
          <button
            onClick={handleExpandLandingNav}
            className="flex lg:hidden bg-white transition-all rounded-lg px-2 py-2"
          >
            <Image
              className={`transition-all ${
                expandLandingNav ? "rotate-0" : "rotate-90"
              }`}
              src={icon.Expand}
              width="24"
              height="24"
            />
          </button>
        </div>
        {expandLandingNav && (
          <React.Fragment>
            <button className="bg-transparent text-black transition-all hover:text-[#3000E6] lg:hover:text-black lg:hover:bg-white flex flex-row gap-2 items-center justify-between rounded-lg w-full lg:w-auto p-0 lg:px-4 lg:py-2">
              <p className="font-medium text-sm tracking-tight text-start mt-0">
                UI Kit
              </p>
              <Image
                className="flex lg:hidden"
                src={icon.ArrowRight}
                width="16"
                height="16"
              />
            </button>
            <button className="bg-transparent text-black transition-all hover:text-[#3000E6] lg:hover:text-black lg:hover:bg-white flex flex-row gap-2 items-center justify-between rounded-lg w-full lg:w-auto p-0 lg:px-4 lg:py-2">
              <p className="font-medium text-sm tracking-tight text-start mt-0">
                Pricing
              </p>
              <Image
                className="flex lg:hidden"
                src={icon.ArrowRight}
                width="16"
                height="16"
              />
            </button>
          </React.Fragment>
        )}
      </div>
      <div className="hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-end justify-center w-full lg:w-[30%]">
        <button className="bg-white text-black transition-all flex flex-row gap-2 items-center rounded-full px-8 py-2">
          <Image src={icon.Announcement} width="16" height="16" />
          <p className="font-medium text-sm tracking-tight text-start mt-0">
            Announcing Compaine
          </p>
        </button>
      </div>
      {expandLandingNav && (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-end justify-center lg:justify-end w-full lg:w-[40%]">
          <button className="bg-transparent text-black transition-all hover:text-[#3000E6] lg:hover:text-black lg:hover:bg-white flex flex-row gap-2 items-center justify-between rounded-lg w-full lg:w-auto p-0 lg:px-4 lg:py-2">
            <p className="font-medium text-sm tracking-tight text-start mt-0">
              Contact
            </p>
            <Image
              className="flex lg:hidden"
              src={icon.ArrowUp}
              width="16"
              height="16"
            />
          </button>
          <button className="bg-transparent text-black transition-all hover:text-[#3000E6] lg:hover:text-black lg:hover:bg-white flex flex-row gap-2 items-center justify-between rounded-lg w-full lg:w-auto p-0 lg:px-4 lg:py-2">
            <p className="font-medium text-sm tracking-tight text-start mt-0">
              Support
            </p>
            <Image
              className="flex lg:hidden"
              src={icon.ArrowUp}
              width="16"
              height="16"
            />
          </button>
          <button className="bg-transparent text-black transition-all hover:text-[#3000E6] lg:hover:text-black lg:hover:bg-white flex flex-row gap-2 items-center justify-between rounded-lg w-full lg:w-auto p-0 lg:px-4 lg:py-2">
            <p className="font-medium text-sm tracking-tight text-start mt-0">
              Terms of Use
            </p>
            <Image
              className="flex lg:hidden"
              src={icon.ArrowRight}
              width="16"
              height="16"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default LandingNav;

"use client";
import React from "react";
import Image from "next/image";

const logo = {
  Compaine: require("@/shared/assets/compaine.svg"),
};
const icon = {
    Announcement: require("@/shared/icons/vuesax/outline/magic-star.svg"),
}

const LandingNav = () => {
  return (
    <nav className="bg-[#F8F8FF]/10 fixed top-0 z-10 flex flex-col lg:flex-row gap-4 items-center justify-between w-full h-auto backdrop-blur-lg p-8 lg:px-32 lg:py-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-center justify-center lg:justify-start w-full lg:w-[40%]">
        <button className="bg-transparent transition-all flex flex-row gap-2 items-center rounded-lg px-4 py-2">
          <p className="font-bold text-sm tracking-tight text-start mt-0">
            <span className="text-[#3000E6]">C</span>
            <span className="text-[#FF03FF]">o</span>
            <span className="text-[#3000E6]">mpaine</span>
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/5 flex flex-row gap-2 items-center rounded-lg px-4 py-2">
          <p className="font-medium text-sm tracking-tight text-start mt-0">
            UI Kit
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/5 flex flex-row gap-2 items-center rounded-lg px-4 py-2">
          <p className="font-medium text-sm tracking-tight text-start mt-0">
            Pricing
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/5 flex flex-row gap-2 items-center rounded-lg px-4 py-2">
          <p className="font-medium text-sm tracking-tight text-start mt-0">
            Terms of Use
          </p>
        </button>
      </div>
      <div className="hidden lg:flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-end justify-center w-full lg:w-[30%]">
        <button className="bg-white ring-1 ring-black/10 transition-all hover:ring-black/20 flex flex-row gap-2 lg:hover:gap-4 items-center rounded-full px-8 py-2">
          <Image src={icon.Announcement} width="16" height="16" />
          <p className="font-medium text-sm tracking-tight text-start mt-0">
           Announcing Compaine
          </p>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-end justify-center lg:justify-end w-full lg:w-[40%]">
        <button className="bg-transparent transition-all hover:bg-black/5 flex flex-row gap-2 items-center rounded-lg px-4 py-2">
          <p className="font-medium text-sm tracking-tight text-start mt-0">
            Contact
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/5 flex flex-row gap-2 items-center rounded-lg px-4 py-2">
          <p className="font-medium text-sm tracking-tight text-start mt-0">
            Support
          </p>
        </button>
      </div>
    </nav>
  );
};

export default LandingNav;

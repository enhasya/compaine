"use client";

import React, { useState } from "react";
import Image from "next/image";

const illustrations = {
  Diamond: require("@/shared/assets/diamond.svg"),
};

const icons = {
  CreativeExcellence: require("@/shared/icons/vuesax/outline/award-blue.svg"),
  CuttingEdgeTechnology: require("@/shared/icons/vuesax/outline/3dcube-blue.svg"),
  ReliabilityAndSupport: require("@/shared/icons/vuesax/outline/24-support-blue.svg"),
  ArrowDown: require("@/shared/icons/vuesax/outline/arrow-down-blue.svg"),
};

const Header = () => {
  const [expandSection, setExpandSection] = useState({
    CreativeExcellence: true,
    CuttingEdgeTechnology: false,
    ReliabilityAndSupport: false,
  });

  const handleExpandSection = (section) => {
    setExpandSection((prevState) => ({
      CreativeExcellence: false,
      CuttingEdgeTechnology: false,
      ReliabilityAndSupport: false,
      [section]: !prevState[section],
    }));
  };

  return (
    <main className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center w-full h-auto lg:h-screen px-8 pt-0 pb-8 lg:p-32">
      <div className="flex flex-col w-full lg:w-[40%] h-auto items-start justify-start">
        <p className="text-[#3000E6] font-bold text-sm lg:text-lg tracking-tight text-start uppercase mt-0">
          Get 10% Off The First Purchase!
        </p>
        <p className="font-medium text-2xl lg:text-4xl tracking-tight text-start mt-4 lg:mt-8">
          <span className="text-[#FF03FF]">Compaine</span> - Create Your
          Business Website Now
        </p>
        <p className="font-light text-sm lg:text-lg tracking-tight text-start mt-4 lg:mt-8">
          Your premier destination for all your company website needs. We pride
          ourselves on our expertise in crafting stunning websites that not only
          captivate your audience but also drive results.
        </p>
        <div className="flex flex-row gap-2 lg:gap-4 items-center justify-start w-full lg:w-auto mt-4 lg:mt-8">
          <button className="bg-[#3000E6] transition-all hover:bg-[#3000E6]/90 rounded-lg px-4 py-2">
            <p className="text-white font-light text-sm tracking-tight">
              UI Kit
            </p>
          </button>
          <button className="bg-[#3000E6] transition-all hover:bg-[#3000E6]/90 rounded-lg px-4 py-2">
            <p className="text-white font-light text-sm tracking-tight">
              Contact
            </p>
          </button>
        </div>
      </div>
      <Image
        className="flex w-full lg:w-[30%] h-full drop-shadow-2xl animate-pulse"
        src={illustrations.Diamond}
        width="730"
        height="813"
      />
      <div className="flex flex-col w-full lg:w-[40%] h-auto items-start justify-start">
        <p className="text-[#3000E6] font-bold text-sm lg:text-lg tracking-tight text-start uppercase mt-0">
          Why Choose Compaine?
        </p>
        <div className="flex flex-col w-full h-auto gap-0 mt-4 lg:mt-8">
          <Section
            onClick={() => handleExpandSection("CreativeExcellence")}
            cn={"rounded-t-lg px-8 pt-8 pb-4"}
            title="Creative Excellence"
            icon={icons.CreativeExcellence}
            iconState={expandSection.CreativeExcellence}
            expandExp={expandSection.CreativeExcellence}
            exp="Expect visually stunning websites that not only capture attention but also deliver an exceptional user experience, fostering customer loyalty."
          />
          <Section
            onClick={() => handleExpandSection("CuttingEdgeTechnology")}
            cn={"rounded-none px-8 pt-4 pb-4"}
            title="Cutting-Edge Technology"
            icon={icons.CuttingEdgeTechnology}
            iconState={expandSection.CuttingEdgeTechnology}
            expandExp={expandSection.CuttingEdgeTechnology}
            exp="From responsive design to seamless navigation, we leverage cutting-edge tools to keep your website at the forefront of innovation."
          />
          <Section
            onClick={() => handleExpandSection("ReliabilityAndSupport")}
            cn={"rounded-b-lg px-8 pt-4 pb-8"}
            title="Reability and Support"
            icon={icons.ReliabilityAndSupport}
            iconState={expandSection.ReliabilityAndSupport}
            expandExp={expandSection.ReliabilityAndSupport}
            exp="Offering reliable ongoing support, ensuring your website secure, and up-to-date with the evolving digital landscape."
          />
        </div>
      </div>
    </main>
  );
};

export default Header;

const Section = ({ onClick, cn, title, icon, iconState, expandExp, exp }) => {
  return (
    <button onClick={onClick} className={`${cn} bg-white flex flex-col w-full`}>
      <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
        <div className="flex flex-row gap-2 items-center justify-start w-auto h-auto">
          <Image src={icon} width="16" height="16" />
          <p className="text-[#3000E6] font-medium text-sm tracking-tight text-start mt-0">
            {title}
          </p>
        </div>
        <Image
          className={`transition-all ${iconState ? "rotate-180" : "rotate-0"}`}
          src={icons.ArrowDown}
          width="16"
          height="16"
        />
      </div>
      {expandExp && (
        <p className="font-light text-sm tracking-tight text-start mt-2 lg:mt-4">
          {exp}
        </p>
      )}
    </button>
  );
};

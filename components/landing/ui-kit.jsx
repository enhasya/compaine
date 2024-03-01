"use client";

import React, { useState } from "react";
import Image from "next/image";

const illustrations = {
  UIKit: require("@/shared/assets/example.png"),
  exorcisindemon: require("@/shared/assets/exorcisindemon.png"),
  shrasya: require("@/shared/assets/shrasya.png"),
};

const icons = {
  CreativeExcellence: require("@/shared/icons/vuesax/outline/award-blue.svg"),
  CuttingEdgeTechnology: require("@/shared/icons/vuesax/outline/3dcube-blue.svg"),
  ReliabilityAndSupport: require("@/shared/icons/vuesax/outline/24-support-blue.svg"),
  ArrowDown: require("@/shared/icons/vuesax/outline/arrow-down-blue.svg"),
};

const LandingUIKit = () => {
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
    <main className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start justify-center w-full h-auto px-8 pt-0 pb-8 lg:px-32 lg:pt-0 lg:pb-32">
      <Image
        className="flex w-full lg:w-[60%] h-full drop-shadow-2xl"
        src={illustrations.UIKit}
        width="5595"
        height="4195"
      />
      <div className="flex flex-col w-full lg:w-[40%] h-auto items-start justify-start">
        <p className="text-[#3000E6] font-bold text-sm lg:text-lg tracking-tight text-start uppercase mt-0">
          Ready to take your online presence to the next level?
        </p>
        <p className="font-medium text-2xl lg:text-4xl tracking-tight text-start mt-4 lg:mt-8">
          <span className="text-[#FF03FF]">Tailored</span> Solutions for Every
          Business
        </p>
        <p className="font-light text-sm lg:text-lg tracking-tight text-start mt-4 lg:mt-8">
          Our team of skilled professionals works closely with you to understand
          your brand identity, target audience, and business objectives. We then
          tailor a customized website solution that perfectly aligns with your
          vision and goals.
        </p>
        <div className="flex flex-row gap-2 lg:gap-4 items-center justify-start w-full lg:w-auto mt-4 lg:mt-8">
          <button className="bg-[#3000E6] transition-all hover:bg-[#3000E6]/90 rounded-lg px-4 py-2">
            <p className="text-white font-medium text-sm tracking-tight">
              UI Kit
            </p>
          </button>
          <button className="bg-[#3000E6] transition-all hover:bg-[#3000E6]/90 rounded-lg px-4 py-2">
            <p className="text-white font-medium text-sm tracking-tight">
              Contact
            </p>
          </button>
        </div>
        <p className="text-[#3000E6] font-bold text-sm lg:text-lg tracking-tight text-start uppercase mt-8 lg:mt-16">
          Explore the Voices of Satisfaction
        </p>
        <div className="flex flex-col w-full h-auto gap-0 mt-4 lg:mt-8">
          <Section
            onClick={() => handleExpandSection("CreativeExcellence")}
            cn={"rounded-t-lg px-8 pt-8 pb-4"}
            title="exorcisindemon's Portfolio"
            icon={icons.CreativeExcellence}
            iconState={expandSection.CreativeExcellence}
            expandWrap={expandSection.CreativeExcellence}
            image={illustrations.exorcisindemon}
            exp={
              "Take a moment to explore the intricacies of this creation – every pixel meticulously placed, every interaction thoughtfully designed. From seamless navigation to captivating visuals, every element bears the hallmark of my expertise and passion for pushing the boundaries of digital craftsmanship."
            }
            shortcut="https://exorcisindemon.vercel.app"
          />
          <Section
            onClick={() => handleExpandSection("ReliabilityAndSupport")}
            cn={"rounded-b-lg px-8 pt-4 pb-8"}
            title="shrasya's Portfolio"
            icon={icons.ReliabilityAndSupport}
            iconState={expandSection.ReliabilityAndSupport}
            expandWrap={expandSection.ReliabilityAndSupport}
            image={illustrations.shrasya}
            exp={
              "Delve into the digital realm I've meticulously crafted for you – a website where innovation and aesthetics converge seamlessly. With a passion for cutting-edge technology, I've woven the magic of JSX, React.js Maven, Next.js Virtuoso, and the enchanting iOS App Enchantress into every pixel and line of code."
            }
            shortcut="https://shrasya.vercel.app"
          />
        </div>
      </div>
    </main>
  );
};

export default LandingUIKit;

const Section = ({
  onClick,
  cn,
  title,
  icon,
  iconState,
  expandWrap,
  image,
  exp,
  shortcut,
}) => {
  return (
    <div className={`${cn} bg-white flex flex-col w-full`}>
      <button
        onClick={onClick}
        className="flex flex-row gap-2 items-center justify-between w-full h-auto"
      >
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
      </button>
      {expandWrap && (
        <div className="flex flex-col w-full h-auto justify-start items-start mt-4 lg:mt-8">
          <Image src={image} width="3840" height="2160" />
          <p className="font-light text-sm tracking-tight text-start mt-4 lg:mt-8">
            {exp}
          </p>
          <p className="font-medium text-sm tracking-tight text-start mt-4 lg:mt-8">
            {shortcut}
          </p>
        </div>
      )}
    </div>
  );
};

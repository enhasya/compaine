import React from "react";

const { default: Header } = require("@/components/landing/header");
const { default: LandingNav } = require("@/components/navigations/landing-nav");

const LandingLayout = () => {
  return (
    <React.Fragment>
      <LandingNav />
      <Header />
      <Header />
      <Header />
      <Header />
    </React.Fragment>
  );
};

export default LandingLayout;

import React from "react";

const { default: LandingHeader } = require("@/components/landing/header");
const { default: LandingNav } = require("@/components/navigations/landing-nav");
const { default: LandingUIKit } = require("@/components/landing/ui-kit");

const LandingLayout = () => {
  return (
    <React.Fragment>
      <LandingNav />
      <LandingHeader />
      <LandingUIKit />
    </React.Fragment>
  );
};

export default LandingLayout;

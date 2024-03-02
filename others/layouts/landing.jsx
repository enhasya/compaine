import React from "react";

const { default: LandingNav } = require("@/components/navigations/landing-nav");
const { default: LandingHeader } = require("@/components/landing/header");
const { default: LandingUIKit } = require("@/components/landing/ui-kit");
const {
  default: LandingTestimonials,
} = require("@/components/landing/testimonials");

const LandingLayout = () => {
  return (
    <React.Fragment>
      <LandingNav />
      <LandingHeader />
      <LandingUIKit />
      <LandingTestimonials />
    </React.Fragment>
  );
};

export default LandingLayout;

import React from "react";

const { default: Header } = require("@/components/landing/header");

const LandingLayout = () => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};

export default LandingLayout;

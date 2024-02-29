import React from "react";

const { default: LandingLayout } = require("@/others/layouts/landing");

export default function Home() {
  return (
    <React.Fragment>
      <LandingLayout />
    </React.Fragment>
  );
}

import React from "react";
import BannerFirstContainer from "./BannerFirstContainer.jsx";
import BannerSecondContainer from "./BannerSecondContainer.jsx";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <BannerFirstContainer />
        <BannerSecondContainer />
      </section>
    </>
  );
};

export default Banner;

import React from "react";
import MainCarousel from "../../homecarousel/MainCarousel";
import HomeSectionCarousel from "../../homesectioncarousel/HomeSectionCarousel";
import { skin_care } from "../../data/skinCare";
import Footer from "../../footer/Footer";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={skin_care} sectionName={"Skin Care"} />
        <HomeSectionCarousel data={skin_care} sectionName={"Color"} />
        <HomeSectionCarousel data={skin_care} sectionName={"Personal Care"} />
        <HomeSectionCarousel data={skin_care} sectionName={"Wellness"} />
        <HomeSectionCarousel data={skin_care} sectionName={"Home Care"} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

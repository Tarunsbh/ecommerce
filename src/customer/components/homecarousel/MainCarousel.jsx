import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "../data/mainCarouselData";
import { margin } from "@mui/system";
import { Margin } from "@mui/icons-material";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer w-full md:w-screen px-4 h-auto max-h-[80vh]"
      role="presentation"
      src={item.image}
      alt=" "
    />
  ));

  return (
    <AliceCarousel
      autoWidth
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;

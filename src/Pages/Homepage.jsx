import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { fish } from "../Data/Fish/fish";
import { cat } from "../Data/Cat/cat";
import { rabbit } from "../Data/Rabbit/rabbit";
import { dog } from "../Data/Dog/dog";

const Homepage = () => {
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={dog} section={"Dog"} />
        <HomeProductSection data={cat} section={"Cat"} />
        <HomeProductSection data={rabbit} section={"Rabbit"} />
        <HomeProductSection data={fish} section={"Fish"} />
      </div>
    </div>
  );
};

export default Homepage;

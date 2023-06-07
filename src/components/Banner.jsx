import { React } from "react";
import banner from "../images/banner.jpg";

function Banner() {
  return (
    <header>
      <div className="relative mt-20">
        <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
          <p className="text-xl font-medium mb-2">RECENT LAUNCH</p>
          <h1 className="text-5xl font-bold mt-2">CRS-28 MISSION</h1>
        </div>

        <img src={banner} alt="CRS-28 Mission Banner" className="w-full" />
      </div>
    </header>
  );
}

export default Banner;

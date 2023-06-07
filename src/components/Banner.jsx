import React from "react";
import banner from "../images/banner.png";

function Banner() {
  return (
    <div>
      <div className="relative mt-20">
        <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
          <p className="text-xl font-medium mb-2">RECENT LAUNCH</p>
          <h1 className="text-5xl font-bold mt-2">CRS-28 MISSION</h1>
        </div>

        <img
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/CRS_28_outsidehangar1h_IMG_3768_desktop_f9d8036732.jpg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Banner;

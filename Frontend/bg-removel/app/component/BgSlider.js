import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

function BgSlider() {
  const [sliderImage, setSliderImage] = useState(50);

  const handleSlider = (e) => {
    setSliderImage(e.target.value);
  };

  return (
    <div className="md:my-20 my-10">
      <h1 className="text-center md:text-4xl text-2xl font-semibold text-gray-700">
        Remove Background With High <br /> Quality and Accuracy
      </h1>

      {/* Image with slider functionality */}
      <div className="mt-5 md:mt-10 relative w-full overflow-hidden max-w-3xl mx-auto ">
        <Image
          alt="img"
          src={assets?.image_w_bg}
          width={800}
          height={800}
          className="object-cover"
          style={{ clipPath: `inset(0 ${100.2 - sliderImage}% 0 0)` }}
        />
        <Image
          alt="img"
          src={assets?.image_wo_bg}
          width={800}
          height={800}
          className="object-cover absolute top-0 left-0 w-full h-full "
          style={{ clipPath: `inset(0 0 0 ${sliderImage}%)` }}
        />

        <input
          type="range"
          min={0}
          max={100}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slid"
          value={sliderImage}
          onChange={handleSlider}
        />
      </div>
    </div>
  );
}

export default BgSlider;

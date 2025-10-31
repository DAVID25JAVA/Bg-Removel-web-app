import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import Button from "../component/Button";

function page() {
  return (
    <div className="max-w-6xl px-5 mx-auto mt-20 min-h-55">
      <div className="bg-white w-full shadow rounded-xl p-5 flex md:justify-between flex-col md:flex-row gap-5 md:gap-0">
        {/* Original Image  */}
        <div>
          <p className="py-3 text-gray-600 font-bold text-xl">Original Image</p>
          <Image alt="img" src={assets?.image_w_bg} width={500} height={500} />
        </div>
        {/* Without bg image */}
        <div>
          <p className="py-3 text-gray-600 font-bold text-xl">Background Remove</p>
          <Image alt="img" src={assets?.image_wo_bg} width={500} height={500} />
        {/* Button */}
        <div className="flex justify-end gap-5">
          {/* Try Another Image */}
          <Button text="Try anoth image" variant="primary" className="mt-5" />
          <Button text="Download image" variant="secondary" className="mt-5" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default page;

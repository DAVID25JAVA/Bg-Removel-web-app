"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Button from "./component/Button";
import { Upload } from "lucide-react";
import Features from "./component/Features";
import Testimonial from "./component/Testimonial";
import BgSlider from "./component/BgSlider";

function Home() {
  const ref = useRef();
  console.log("ref----->", ref);

  const handleFile = () => {
    console.log("Open files");
    ref?.current?.files;
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="  flex items-center flex-col md:flex-row  md:justify-between">
        {/* left content */}
        <div className=" md:max-w-xl">
          <h1 className="md:font-bold font-semibold text-gray-800 md:text-5xl text-2xl leading-8 md:leading-15 md:max-w-md ">
            Remove the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              background
            </span>{" "}
            from images for free.
          </h1>
          <p className="mt-5 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>

          <Button
            onClick={handleFile}
            className="md:px-9 mx-auto md:mx-0 md:py-3 mt-3"
            text="Upload Image"
            icon={<Upload />}
            variant="secondary"
          />
          <input
            type="file"
            ref={ref}
            className="mt-2 border hidden border-gray-600 text-gray-700 p-2"
          />
        </div>

        {/* Right Image */}
        <div>
          <Image
            src={assets?.header_img}
            alt="hero_image"
            width={450}
            height={100}
          />
        </div>
      </div>

      {/* Features section */}
      <div>
        <div className="flex justify-center">
          <h1 className="text-center text-gray-800 md:mt-36 mt-20 md:text-4xl text-2xl font-bold max-w-lg">
            Steps to remove background image in seconds
          </h1>
        </div>
        <Features />


        {/* Bg Slider code here---- */}
        <div>
          <BgSlider />
        </div>



        <div>
          <Testimonial />
        </div>

        {/* Upload Button */}
        <h1 className="text-gray-800 font-semibold md:text-4xl text-2xl text-center  ">
          See the magic. Try now
        </h1>
        <div className="flex justify-center">
          <Button
            text="Upload Image"
            icon={<Upload />}
            variant="secondary"
            className="mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

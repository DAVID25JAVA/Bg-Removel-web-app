"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Features from "./component/Features";
import Testimonial from "./component/Testimonial";
import BgSlider from "./component/BgSlider";

function Home() {
   

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="  flex items-center flex-col md:flex-row  md:justify-between">
        {/* left content */}
        <div className=" md:max-w-xl">
          <h1 className="font-bold   text-gray-800 md:text-5xl text-2xl leading-8 md:leading-15 md:max-w-md ">
            Remove the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              background
            </span>{" "}
            from images for free.
          </h1>
          <p className="mt-3 text-gray-600">
            A smart AI-based web tool that automatically detects and removes
            image backgrounds with high precision, speed, and ease for users.
          </p>

          <div className=" mt-4 w-48 h-10  rounded-full flex items-center justify-center cursor-pointer gap-2 bg-gradient-to-r from-purple-700 to-pink-400 hover:scale-105 transition-all duration-500 text-white px-2">
            <input type="file" id="upload1" className="hidden" />
            <label htmlFor="upload1" className="flex gap-2 cursor-pointer">
              <Image alt="icon" src={assets?.upload_btn_icon} width={20} height={20} />
              <p className=""> Upload Your Image</p>
            </label>
          </div>
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
        <h1 className="text-gray-800 font-bold md:text-4xl text-2xl text-center  ">
          See the magic. Try now
        </h1>
        <div className="flex justify-center">
          <div className=" mt-4 w-48 h-10 rounded-full flex items-center justify-center cursor-pointer gap-2 bg-gradient-to-r from-purple-700 to-pink-400 hover:scale-105 transition-all duration-500 text-white px-2">
            <input type="file" id="upload2" className="hidden" />
            <label htmlFor="upload2" className="flex gap-2 cursor-pointer">
              <Image alt="icon" src={assets?.upload_btn_icon} width={20} height={20} />
              <p className=""> Upload Your Image</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

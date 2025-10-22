import { features } from "@/public/assets/assets";
import React from "react";

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto mt-10 md:mt-10 flex flex-col md:flex-row gap-5">
      {features?.map((data, i) => {
        return (
          <div
            key={i}
            className="max-w-md border hover:scale-105 transition-all duration-300 border-gray-500 rounded-lg p-10 flex gap-5 "
          >
            <p className=" flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-400 text-white h-10 px-2 rounded-lg">
              {data?.icon}
            </p>
            <div className="">
              <h1 className="text-xl text-black font-semibold">
                {data?.title}
              </h1>
              <p className="text-xs text-gray-600">{data?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

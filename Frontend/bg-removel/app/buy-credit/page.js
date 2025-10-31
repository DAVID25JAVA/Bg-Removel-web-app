import { assets, plans } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";


function page() {
  return (
    <div className="max-w-6xl mx-auto p-5 min-h-72 mt-5">
      {/* code */}
      <div className="flex flex-col justify-center items-center">
        <p className="px-8 py-[6px] capitalize font-semibold rounded-full text-gray-600 border border-gray-500">
          Our Plan
        </p>
        <span className="font-semibold text-gray-600 mt-5 md:text-2xl text-xl text-center">
          Choose the plan that’s right for you
        </span>

        {/* Buy Plan Card */}
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          {plans?.map((subs) => {
            return (
              <div
                key={subs?.id}
                className="p-6 w-60 bg-green-50 shadow-2xl rounded-xl"
              >
                <Image alt="logo" src={assets?.logo_icon} width={30} height={30} />
                <p className="text-gray-700 text-2xl font-semibold mt-8">{subs?.id}</p>
                <p className="text-gray-600 text-base">{subs.desc}</p>
                <p className="text-gray-700 font-semibold mt-4 text-2xl">
                  ${subs?.price}/<span className="text-sm">credits {subs?.credits}</span>
                </p>
                <button className="px-10 py-[6px] hover:scale-105 transition-all duration-500 cursor-pointer bg-black text-white rounded-lg mt-5">Purchase</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;

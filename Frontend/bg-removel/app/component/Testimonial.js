import { testimonialsData } from "@/public/assets/assets";
import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <div className="md:my-28 my-20">
      <h1 className="text-gray-800 font-bold md:text-4xl text-2xl text-center">
        Customer Testimonials
      </h1>

      <div className="flex flex-col md:flex-row gap-5 justify-center mt-10 ">
        {testimonialsData?.map((data) => {
          return (
            <div
              key={data?.id}
              className="border hover:scale-105 transition-all duration-300 border-gray-500 outline-none rounded-md md:p-8 p-5 max-w-md"
            >
              <p className="font-semibold text-gray-600">"</p>
              <p className="text-sm text-gray-600">{data?.text}</p>
              <div className="flex gap-2 pt-8">
                <div>
                  <Image
                    src={data?.image}
                    width={35}
                    height={35}
                    className="rounded-full"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col leading-2">
                  <p className="text-black font-bold text-base">
                    {data?.author}
                  </p>
                  <p className="text-gray-600 text-sm ">{data?.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;

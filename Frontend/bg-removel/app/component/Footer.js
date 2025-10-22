"use client"
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Footer() {

  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto pb-5 mt-36 flex flex-col md:flex-row md:justify-between p-5 gap-5">
      <div className="flex md:items-center flex-col md:flex-row gap-5">
        <Image
          alt="logo"
          src={assets?.logo}
          width={180}
          className="cursor-pointer duration-300"
          onClick={() => {
            router.push("/")
            scrollTo(0,0)
          }}
        />
        <hr className="h-10 border-[0.5px] border-gray-500 hidden md:block" />
        <p className="text-gray-600">Copyright @David.dev</p>
        <hr className="h-6 border-[0.5px] border-gray-500 hidden md:block" />
        <p className="text-gray-600">All right reserved.</p>
      </div>

      <div className="flex">
        <Link href="" target="_blank">
          <Image src={assets?.facebook_icon} alt="icon" />
        </Link>
        <Link href="" target="_blank">
          <Image src={assets?.twitter_icon} alt="icon" />
        </Link>
        <Link href="" target="_blank">
          <Image alt="icon" src={assets?.google_plus_icon} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;

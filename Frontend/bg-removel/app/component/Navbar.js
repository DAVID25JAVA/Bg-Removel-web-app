"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Button from "./Button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto py-5 px-5">
      {/* logo */}
      <div className="flex justify-between items-center">
        <div>
          <Image
            onClick={() => {
              router.push("/")
              scrollTo(0, 0);
            }}
            className="cursor-pointer w-40 md:w-0 "
            alt="logo"
            src={assets?.logo}
            width={180}
            height={100}
          />
        </div>

        {/* Button */}
        <div>
          <Button text="Get Started" className="" variant="primary" icon={<MoveRight />} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

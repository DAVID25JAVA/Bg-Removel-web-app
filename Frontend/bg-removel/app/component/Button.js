"use client";
import React from "react";

export default function Button({
  text,
  icon: Icon,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) {
  const variants = {
    primary:
      "bg-gray-800 hover:bg-gray-600 text-white hover:scale-105 transition-all duration-500",
    secondary:
      "bg-gradient-to-r from-purple-700 to-pink-400 hover:scale-105 transition-all duration-500 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center md:text-sm text-xs cursor-pointer rounded-full justify-center gap-2 md:px-4 md:py-2 p-2 md:p-0 font-medium transition-all duration-200 
      ${variants[variant]} 
      ${disabled ? "opacity-60 cursor-not-allowed" : ""}
      ${className}`}
    >
      {text && <span>{text}</span>}
      {Icon}
    </button>
  );
}

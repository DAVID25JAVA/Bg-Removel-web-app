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
      className={`flex items-center text-sm cursor-pointer rounded-full justify-center gap-2 px-4 py-2 font-medium transition-all duration-200 
      ${variants[variant]} 
      ${disabled ? "opacity-60 cursor-not-allowed" : ""}
      ${className}`}
    >
      {text && <span>{text}</span>}
      {Icon}
    </button>
  );
}

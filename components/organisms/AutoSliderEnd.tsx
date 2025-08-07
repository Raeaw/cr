"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/source/splash-home1.jpg",
  "/source/splash-home2.jpg",
  "/source/splash-left1.jpg",
  "/source/splash-left2.jpg",
  "/source/splash-left3.jpg",
  "/source/splash-left4.jpg",
  "/source/splash-right1.jpg",
  "/source/splash-right2.jpg",
  "/source/splash-right3.jpg",
  "/source/splash-right4.jpg"
];

export default function AutoSliderEnd() {
  const [index, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

   return (
    <div className="relative w-full h-100 overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`slide-${i}`}
          fill
          className={`object-cover transition-opacity duration-500 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white opacity-80"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/source/splash-left1.jpg",
  "/source/splash-left2.jpg",
  "/source/splash-left3.jpg",
  "/source/splash-left4.jpg"
];

export default function AutoSliderL() {
   const [index, setCurrent] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrent((prev) => (prev + 1) % images.length);
     }, 3000);
     return () => clearInterval(interval);
   }, []);
 
    return (
     <div className="relative w-220 h-157 overflow-hidden">
       {images.map((img, i) => (
         <Image
           key={i}
           src={img}
           alt={`slide-${i}`}
           fill
           className={`object-cover transition duration-1000 ease-in-out ${
             i === index ? "opacity-100 z-10" : "opacity-0 z-0"
           }`}
         />
       ))}

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-20" />
    </div>
  );
}

import React from "react";
import { bebas, oswald } from "../font";

const Home = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen w-full hero pt-14 px-4 sm:px-6 lg:px-8 ${oswald.className}`}
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[14vw] font-black leading-[0.9] text-center">
          WE THINK
        </h1>
        <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[14vw] font-black leading-[0.9] text-center">
          CRAFT AND
        </h1>
        <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[14vw] font-black leading-[0.9] text-center">
          DESIGN
        </h1>
      </div>
      
      <div className="uppercase text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extralight flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 md:p-2 w-full border-t mt-5 sm:mt-8 md:mt-10 border-zinc-400">
        <h1 className="text-center sm:text-left">
          We craft bold design & clean Webflow.
        </h1>
        <h1 className="text-center sm:text-right whitespace-nowrap">
          JABALPUR, MADHYA PRADESH
        </h1>
      </div>
    </div>
  );
};

export default Home;
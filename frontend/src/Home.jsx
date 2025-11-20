import React from "react";
import img from "./assets/image.png";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center bg-white text-center px-5 py-1 max-w-lg mx-auto">
        {/* Header */}
        <h1 className="text-xs font-bold tracking-wide uppercase text-[#eba181] border border-rose-200  rounded-full px-7 py-0.5 my-3">
          Premium Course for Fashion Founders
        </h1>
        {/* Title */}
        <h1 className="outfit-title   text-3xl text-rose-900  leading-tight mb-3 tracking-tighter">
          Turn Your Clothing Brand Dream into a Profitable Reality
        </h1>
        {/* Subtitle */}
        <p className=" text-[#eba181] tracking-tighter  text-sm ">
          Learn the exact strategies and systemsthat can help you earn a minimum
          profit of ₹1,00,000 per month.
        </p>
        {/* Image section */}
        <div className="w-full rounded-3xl overflow-hidden p-1 ">
          <div className=" rounded-2xl flex flex-col items-center justify-evenly">
            <img
              src={img}
              alt="Course preview"
              className="rounded-2xl object-cover h-[50vh] w-full  "
            />
            <div className="flex flex-col items-center mb-1">
              <h1 className="outfit-title  text-2xl font-semibold text-rose-900">
                Samridhi Agarwal
              </h1>
              <h2 className="text-sm font-semibold text-[#eba181]">
                Founder & Designer
              </h2>
              <p className="text-sm text-[#eba181]">Peach It Up</p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-1">
          <button className="outfit-title  bg-[#eba181] hover:bg-[#ecaa8e] hover:scale-[1.02] transition-all text-white font-semibold py-3 rounded-full w-full">
            Register Now @ Just ₹99 
          </button>
          <button className=" outfit-title  border border-[#eba181] text-[#eba181] font-medium py-3 rounded-full w-full">
            Watch Intro Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import img from "./assets/image.png";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center bg-white text-center px-5 py-1 max-w-lg mx-auto">
        {/* Header */}
        <div className="text-sm font-medium tracking-tight text-rose-900 uppercase border border-rose-700 bg-rose-50 rounded-full px-6 py-1 mb-4">
          Premium Course for Fashion Founders
        </div>
        {/* Title */}
        <h1 className=" font-lora text-3xl font-light text-rose-900  leading-tight mb-3 tracking-tight">
          Turn Your Clothing Brand Dream into a Profitable Reality
        </h1>
        {/* Subtitle */}
        <p className="text-rose-800 tracking-tighter m-3 text-sm ">
          Learn the exact strategies and systemsthat can help you earn a minimum
          profit of ₹1,00,000 per month.
        </p>
        {/* Image section */}
        <div className="w-full rounded-3xl overflow-hidden bg-rose-50 p-1">
          <div className="bg-linear-to-b from-rose-200 to-rose-100 rounded-2xl flex flex-col items-center justify-evenly">
            <img
              src={img}
              alt="Course preview"
              className="rounded-2xl object-cover h-[50vh] w-full "
            />
            <div className="flex flex-col items-center mb-3">
              <h2 className="text-2xl font-semibold text-rose-900">
                Samridhi Agarwal
              </h2>
              <h2 className="text-sm font-semibold text-rose-700">
                Founder & Designer
              </h2>
              <p className="text-sm text-rose-500">Peach It Up</p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-5">
          <button className="bg-rose-400 hover:bg-rose-500 hover:scale-[1.02] transition-all text-white font-semibold py-3 rounded-full w-full">
            Register Now @ Just ₹97 →
          </button>
          <button className="border border-rose-300 text-rose-500 font-medium py-3 rounded-full w-full">
            Watch Intro Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

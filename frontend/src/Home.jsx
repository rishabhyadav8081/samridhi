import React from "react";
import img from "./assets/image.png";

const Home = () => {
  return (
    <div className="flex w-[40vh] flex-col items-center bg-white text-center px-2 py-1 max-w-lg mx-auto ">
      {/* Header */}
      <div className=" w-[40vh]">
        <p className="font-sans text-xs font-extralight tracking-wider uppercase text-[#805257] border border-rose-200 rounded-full px-2 py-0.5 my-3">
          Premium Course for Fashion Founders
        </p>
      </div>

      {/* Title */}
      <div className=" w-[40vh]">
        <h1 className="font-bold text-2xl text-black mb-3 tracking-tighter">
          Turn Your Clothing Brand Dream into a Profitable Reality
        </h1>
      </div>
      {/* Subtitle */}
      <div className=" w-[40vh]">
        <p className="text-[#805257] tracking-tighter text-sm">
          Learn the exact strategies and systems that can help you earn a
          minimum profit of ₹1,00,000 per month.
        </p>
      </div>
      {/* Image Section */}
      <div className=" w-[40vh]">
        <div className="w-full rounded-3xl overflow-hidden p-1">
          <div className="rounded-2xl flex flex-col items-center justify-evenly">
            <img
              src={img}
              alt="Course preview"
              className="rounded-2xl object-cover h-[50vh] w-full"
            />
            <div className="flex flex-col items-center mb-1">
              <h1 className="outfit-title text-2xl font-semibold text-[#805257]">
                Samridhi Agarwal
              </h1>
              <h2 className="text-sm font-semibold text-[#805257]">
                Founder & Designer
              </h2>
              <p className="text-sm text-[#805257]">Peach It Up</p>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className=" w-[40vh]">
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-1">
          <button className="outfit-title bg-[#D88C8C] hover:bg-[#e38989] hover:scale-[1.02] transition-all text-white font-semibold py-3 rounded-full w-full">
            Register Now @ Just ₹99
          </button>
          <button className="outfit-title border border-[#D88C8C] text-[#805257] font-medium py-3 rounded-full w-full">
            Watch Intro Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

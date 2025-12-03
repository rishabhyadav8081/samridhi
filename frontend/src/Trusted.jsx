import React from "react";
import { Star, Users, X } from "lucide-react";
import { LuUser } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import Counter from "./Counter";
import Marquee from "react-fast-marquee";

export default function Trusted() {
  return (
    // <div className=" w-[30vh]">
    <div className="bg-white flex w-[40vh] flex-col items-center text-center px-5 pt-10  mx-auto">
      {/* ---------- Trusted Section ---------- */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-4">
        Trusted by <span className="text-[#D88C8C]">500+</span> Clothing Brand
        Founders
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
        <span className="text-lg font-semibold text-[#805257] ml-2">4.87</span>
        <span className="text-[#805257] text-sm font-semibold">/ 5</span>
      </div>

      {/* Card: Founders Joined */}
      <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all w-full max-w-md   mb-1">
        <div className="flex flex-col items-center justify-center p-5">
          <div className="bg-[#D88C8C] rounded-xl p-4 mb-4 cursor-pointer hover:scale-115 transition-all duration-100">
            <Users className="text-white w-8 " />
          </div>
          <h3 className="text-4xl font-extrabold text-[#D88C8C]  outfit-title ">
            <Counter to={550} />+
          </h3>
          <p className="text-[#805257] font-medium">
            Founders have Joined this Course
          </p>
        </div>
      </div>
      {/* Stats */}
      {/* <marquee OnHover={false}
          direction="left"
          gradient={false}
          speed={1}
          className="py-4"
        > */}
      <div className="flex justify-around overflow-hidden text-sm text-gray-700 m-10 gap-9 animate-scroll-left ">
        <div className="flex flex-col items-center ">
          <LuUser
            size={30}
            className="mb-2 cursor-pointer hover:scale-115 transition-all duration-300"
          />
          <span className="font-bold text-[#805257]">500+</span>
          <span>Students</span>
        </div>

        <div className="flex flex-col items-center">
          <FaRegStar
            size={30}
            className="mb-2 text-yellow-400 cursor-pointer hover:scale-115 transition-all duration-300"
          />
          <span className="font-bold text-[#805257]">4.87</span>
          <span>Rating</span>
        </div>

        <div className="flex flex-col items-center">
          <CiClock2
            size={30}
            className="mb-2 cursor-pointer hover:scale-115 transition-all duration-300"
          />
          <span className="font-bold text-[#805257]">2 Hours</span>
          <span>Duration</span>
        </div>

        <div className="flex flex-col items-center">
          <IoLanguage
            size={30}
            className="mb-2 cursor-pointer hover:scale-115 transition-all duration-300"
          />
          <span className="font-bold text-[#805257]">EN + HI</span>
          <span>Languages</span>
        </div>
      </div>
      {/* </marquee> */}

      {/* ---------- Struggling Section ---------- */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold  tracking-tighter ">
        Are You Struggling With These ?
      </h2>
      <p className="text-[#805257] text-sm font-extralight  max-w-lg tracking-tighter p-5">
        Don’t worry! You’re not alone. These exact challenges are faced by
        thousands of clothing brand founders every day.
      </p>

      {/* Problem Cards */}
      <div className="flex flex-col gap-5 w-full max-w-xl ">
        {/* Card 1 */}
        <div className="bg-white border border-rose-100  rounded-2xl shadow-sm  cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 transition-all p-4 flex items-start gap-4">
          <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
            <X className="text-white w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              People visit but don’t buy
            </h3> */}
            <p className="text-[#805257] text-sm font-medium">
              You have a stunning collection but can’t convert visitors into
              buyers.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm  transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 p-4 flex items-start gap-4">
          <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
            <X className="text-white w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              No walk-ins or online traffic
            </h3> */}
            <p className="text-[#805257] text-sm font-medium">
              Your website looks beautiful, but sales are stagnant.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 transition-all p-4 flex items-start gap-4">
          <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
            <X className="text-white w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Sales stuck despite hard work
            </h3> */}
            <p className="text-[#805257] text-sm font-medium">
              People think your product is “too expensive”.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 transition-all p-4 flex items-start gap-4">
          <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
            <X className="text-white w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Don't know how to collaborate
            </h3> */}
            <p className="text-[#805257] text-sm  font-medium">
              Your brand has hit a sales plateau.
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 transition-all p-4 flex items-start gap-4">
          <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
            <X className="text-white w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-[#805257] text-sm font-medium">
              You’re working hard but profits aren’t showing up.
            </p>
          </div>
        </div>
        <section className="bg-white flex flex-col items-center text-center px-5 py-10 md:py-16 max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black ">
            Well, not anymore !
          </h2>

          {/* Subtext */}
          <p className="text-[#805257] text-sm md:text-base mb-8 max-w-2xl">
            Watch this video to understand how this masterclass will change your
            mindset and your business.
          </p>

          {/* Video Embed */}
          <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all mb-10">
            <iframe
              className="w-full aspect-video rounded-2xl"
              src="https://www.youtube.com/embed/Nlcr1jd_Tok"
              title="Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Overlay Badge */}
            <div className="absolute top-3 left-3 bg-[#D88C8C]/90 text-rose-800 text-xs md:text-sm font-semibold rounded-full px-3 py-1 backdrop-blur-sm">
              🎥 Course Preview
            </div>
          </div>

          {/* Register Button */}
          <button className="outfit-title  bg-[#D88C8C] hover:bg-[#e38989] hover:scale-[1.02] transition-all text-white font-semibold py-3 rounded-full w-full">
            Register Now @ Just ₹99
          </button>
        </section>
      </div>
    </div>
    // </div>
  );
}

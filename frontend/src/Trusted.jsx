import React from "react";
import { Star, Users, X } from "lucide-react";
import { LuUser } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

export default function Trusted() {
  return (
    <div className="bg-white flex flex-col items-center text-center px-5 pt-15 lg:py-20 max-w-5xl mx-auto">
      {/* ---------- Trusted Section ---------- */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-rose-900 mb-4">
        Trusted by <span className="text-rose-400">500+</span> Clothing Brand
        Founders
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
        <span className="text-lg font-semibold text-gray-800 ml-2">4.87</span>
        <span className="text-gray-500 text-sm">out of 5</span>
      </div>

      {/* Card: Founders Joined */}
      <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all w-full max-w-md py-1 px-6 mb-1">
        <div className="flex flex-col items-center">
          <div className="bg-rose-100 rounded-xl p-3 mb-4">
            <Users className="text-rose-400 w-8 " />
          </div>
          <h3 className="text-4xl font-extrabold text-rose-900 mb-1">550+</h3>
          <p className="text-gray-700 font-medium">
            Founders have Joined this Course
          </p>
        </div>
      </div>
      {/* Stats */}
      <div className="flex justify-around w-full text-sm text-gray-700 m-10">
        <div className="flex flex-col items-center">
          <LuUser size={30} className="mb-2" />
          <span className="font-bold text-rose-400">500+</span>
          <span>Students</span>
        </div>
        <div className="flex flex-col items-center">
          <FaRegStar size={30} className="mb-2 text-yellow-400" />
          <span className="font-bold text-rose-400">4.87</span>
          <span>Rating</span>
        </div>
        <div className="flex flex-col items-center">
          <CiClock2 size={30} className="mb-2" />
          <span className="font-bold text-rose-400">2 Hours</span>
          <span>Duration</span>
        </div>
        <div className="flex flex-col items-center">
          <IoLanguage size={30} className="mb-2" />
          <span className="font-bold text-rose-400">EN + HI</span>
          <span>Languages</span>
        </div>
      </div>

      {/* ---------- Struggling Section ---------- */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-rose-900 m-3">
        Are You Struggling With These?
      </h2>
      <p className="text-gray-600 mb-8 max-w-lg">
        Don’t worry! You’re not alone. These exact challenges are faced by
        thousands of clothing brand founders every day.
      </p>

      {/* Problem Cards */}
      <div className="flex flex-col gap-5 w-full max-w-xl">
        {/* Card 1 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex items-start gap-4">
          <div className="bg-rose-100 rounded-xl p-2 mt-1">
            <X className="text-rose-400 w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              People visit but don’t buy
            </h3> */}
            <p className="text-gray-600 text-sm">
              You have a stunning collection but can’t convert visitors into
              buyers.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex items-start gap-4">
          <div className="bg-rose-100 rounded-xl p-2 mt-1">
            <X className="text-rose-400 w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              No walk-ins or online traffic
            </h3> */}
            <p className="text-gray-600 text-sm">
              Your website looks beautiful, but sales are stagnant.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex items-start gap-4">
          <div className="bg-rose-100 rounded-xl p-2 mt-1">
            <X className="text-rose-400 w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Sales stuck despite hard work
            </h3> */}
            <p className="text-gray-600 text-sm">
              People think your product is “too expensive.”
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex items-start gap-4">
          <div className="bg-rose-100 rounded-xl p-2 mt-1">
            <X className="text-rose-400 w-5 h-5" />
          </div>
          <div className="text-left">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Don't know how to collaborate
            </h3> */}
            <p className="text-gray-600 text-sm">
              Your brand has hit a sales plateau.
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex items-start gap-4">
          <div className="bg-rose-100 rounded-xl p-2 mt-1">
            <X className="text-rose-400 w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-gray-600 text-sm">
            You’re working hard but profits aren’t showing up.
            </p>
          </div>
        </div>
        <section className="bg-white flex flex-col items-center text-center px-5 py-12 md:py-16 max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-rose-900 mb-3">
          Well, not anymore!
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-2xl">
          Watch this video to understand how this masterclass will change your mindset and your business.
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
            <div className="absolute top-3 left-3 bg-rose-200/90 text-rose-800 text-xs md:text-sm font-semibold rounded-full px-3 py-1 backdrop-blur-sm">
              🎥 Course Preview
            </div>
          </div>

          {/* Register Button */}
          <button className="bg-linear-to-r bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 md:py-4 px-10 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
          Register Now at Just ₹99 →
          </button>
        </section>
      </div>
    </div>
  );
}

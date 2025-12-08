import React from "react";
import img from "./assets/image.png";
import { HiCheckBadge } from "react-icons/hi2";
import { RiWomenLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

const Mentor = () => {
  return (
    <section className=" py-1 px-1 md:px-16 text-center mx-auto w-[40vh]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-black ">
        Meet Your Mentor
      </h2>
      <div className="relative ">
        <img
          src={img}
          alt="Mentor"
          className="w-full object-cover rounded-3xl h-[60vh]"
        />
      </div>
      {/* Mentor Card */}
      <div className="w-full mx-auto rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300  px-2 ">
        {/* Image */}

        {/* Text */}
        <div className=" ">
          <h3 className="text-xl font-bold text-black mb-1">
            Samridhi Agarwal
          </h3>
          <p className="text-[#805257] font-semibold mb-4">
            Founder of Peach It Up
          </p>
          <p className="text-[#805257] text-sm md:text-base tracking-tight  leading-relaxed">
            From turning down Parsons to building a thriving women-led couture
            label in Mumbai, Samridhi’s journey is proof that you don’t need a
            fancy degree to build a brand that sells.
          </p>
          <p className="text-[#805257] text-sm md:text-base tracking-tight mt-3 leading-relaxed">
            She started Peach It Up at just 18, from a small room with a single
            tailor, designing pastel lehengas that reflected joy, freedom, and
            confidence. Today, Peach It Up has its own store in Bandra, has
            served 800+ clients, and has grown into one of Mumbai’s most loved
            boutique labels all built without external funding
          </p>
          <p className="text-[#805257] text-sm md:text-base leading-relaxed tracking-tight mt-3">
            Now, Samridhi is on a mission to help other women founders and
            designers do the same to take their creative talent and turn it into
            a sustainable, profitable business.
          </p>
        </div>
        <div className="bg-white py-12 sm:p-12 lg:p-16 space-y-6 ">
          <div className="space-y-10">
            {/* Card 1 */}
            <div className="bg-white border border-rose-100 p-3 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-4">
              <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
                <span className="text-[#805257] text-xl">
                  <HiCheckBadge size={28}  className="text-white " />
                </span>
              </div>
              <div className="text-left">
                <h3 className="text-md font-semibold  text-left text-black mb-1">
                  Proven Track Record
                </h3>
                <p className="text-[#805257] text-xs  text-left">
                  Built a successful brand from scratch with zero funding
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className=" rounded-2xl p-3  border-rose-100 shadow-md hover:shadow-2xl hover:scale-105  transition-all  flex items-center gap-4">
              <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
              
              <GoGraph size={28} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-md font-semibold text-left text-black mb-1">
                  Real Results
                </h3>
                <p className="text-[#805257] text-xs  text-left">
                  Helped 500+ founders scale their clothing businesses
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className=" border p-3  border-rose-100 rounded-2xl  shadow-md hover:shadow-2xl hover:scale-105 transition-all  flex items-center gap-4">
              <div className="bg-[#D88C8C] rounded-xl p-2 mt-1">
                <span className="text-pink-500 text-xl">
                  <RiWomenLine size={28} className="text-white" />
                </span>
              </div>
              <div className="text-left">
                <h3 className="text-md font-semibold text-black mb-1  text-left">
                  Women Empowerment
                </h3>
                <p className="text-[#805257] text-xs  text-left">
                  Dedicated to helping women founders succeed in fashion
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <blockquote className="text-lg italic font-sans text-gray-800 ">
              <i className="italic font-serif">
                “I know exactly what it feels like to have the designs, the
                dream, and the drive but no direction. I’ve been there. If
                you’ve ever felt stuck or doubted your potential, this
                masterclass will give you the clarity and confidence you need to
                finally grow your brand.”
              </i>
              <footer className="mt-4 text-gray-500">
                — Samridhi, Founder Peach It Up
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;

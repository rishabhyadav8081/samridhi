import React from "react";
import img2 from "./assets/img2.png";
const Mentor = () => {
  return (
    <section className="bg-linear-to-b from-rose-100 to-rose-100 py-1 px-1 md:px-16 text-center mx-5 rounded-2xl">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-rose-900  mb-10">
        Meet Your Mentor
      </h2>

      {/* Mentor Card */}
      <div className="w-full mx-auto bg-linear-to-b  from-rose-200 to-rose-100 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative">
          <img
            src={img2}
            alt="Mentor"
            className="w-full object-cover rounded-t-3xl h-[60vh]"
          />
        </div>

        {/* Text */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-rose-900 mb-1">
            Samridhi Agarwal
          </h3>
          <p className="text-rose-400 font-semibold mb-4">
            Founder of Peach It Up
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            From turning down Parsons to building a thriving women-led couture
            label in Mumbai, Samridhi’s journey is proof that you don’t need a
            fancy degree to build a brand that sells.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            She started Peach It Up at just 18, from a small room with a single
            tailor, designing pastel lehengas that reflected joy, freedom, and
            confidence. Today, Peach It Up has its own store in Bandra, has
            served 800+ clients, and has grown into one of Mumbai’s most loved
            boutique labels all built without external funding
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Now, Samridhi is on a mission to help other women founders and
            designers do the same to take their creative talent and turn it into
            a sustainable, profitable business.
          </p>
        </div>
        <div className="bg-white p-8 sm:p-12 lg:p-16 space-y-6">
          <div className="space-y-10">
            {/* Card 1 */}
            <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="bg-rose-100 rounded-xl p-2 mt-1">
                <span className="text-pink-500 text-xl">🎯</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold  text-center text-rose-900 mb-1">
                  Proven Track Record
                </h3>
                <p className="text-rose-700 text-sm  text-center">
                  Built a successful brand from scratch with zero funding
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all  flex items-center gap-4">
              <div className="bg-rose-100 rounded-xl p-2 mt-1">
                <span className="text-pink-500 text-xl">📈</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-center text-rose-900 mb-1">
                  Real Results
                </h3>
                <p className="text-rose-700 text-sm  text-center">
                  Helped 500+ founders scale their clothing businesses
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all  flex items-center gap-4">
              <div className="bg-rose-100 rounded-xl p-2 mt-1">
                <span className="text-pink-500 text-xl">❤️</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-rose-900 mb-1  text-center">
                  Women Empowerment
                </h3>
                <p className="text-rose-700 text-sm  text-center">
                  Dedicated to helping women founders succeed in fashion
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <blockquote className="text-lg italic text-gray-800">
              <p>
                “I know exactly what it feels like to have the designs, the
                dream, and the drive but no direction. I’ve been there. If
                you’ve ever felt stuck or doubted your potential, this
                masterclass will give you the clarity and confidence you need to
                finally grow your brand.”
              </p>
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

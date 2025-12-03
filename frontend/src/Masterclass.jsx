import React from "react";
import { SiRocket } from "react-icons/si";
import { FaRegLightbulb, FaUsers } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";
const Masterclass = () => {
  const cards = [
    {
      title: "Aspiring Fashion Entrepreneurs",
      description:
        "Ambitious visionaries who have an idea and want to start their own clothing brand.",
        icon:<SiRocket className="text-white" size={28} />,
    },
    {
      title: "Emerging Designers",
      description:
        "Fashion students who aspire to start their own label.",
        icon:<FaGraduationCap className="text-white" size={28} />,
    },
    {
      title: "Small Business Owners",
      description:
        " Struggling brand owners looking to expand, scale, and build systems that create demand.",
      icon:<FiTrendingUp size={28} className="text-white" />,
    },
    {
      title: "Brand Builders",
      description:
        " Designers with great creativity but unsure how to turn it into a profitable business.        ",
      icon: <FaRegLightbulb size={28} className="text-white" />,
    },
    {
        title: "Brand Builders",
        description:
          "Founders who are about to launch or have launched their first collection. ",
        icon: <FaUsers size={28} className="text-white" />,
      },
  ];

  return (
    <section className="bg-linear-to-b from-[#df9b9b] via-[#dba6a6] to-[#df9595] mt-5 mx-auto rounded-2xl p-10 px-6 md:px-16 w-[40vh] ">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Who's this Masterclass for
        </h2>
        <p className="text-[#805257] max-w-2xl font-extrabold mx-auto">
          This masterclass is designed for ambitious individuals ready to
          transform their clothing brand vision into reality.
        </p>
      </div>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[200px] h-[200px] sm:min-w-[320px] md:min-w-[360px] bg-white rounded-2xl shadow-md shrink-0 snap-center p-6 text-center hover:shadow-lg transition-shadow duration-300  "
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-[#D88C8C] text-[#805257] text-3xl w-14 h-14 flex items-center justify-center rounded-lg">
                {card.icon}
              </div>
            </div>
            {/* <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {card.title}
            </h3> */}
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Masterclass;

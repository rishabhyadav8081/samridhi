import React from "react";

const Masterclass = () => {
  const cards = [
    {
      title: "Aspiring Fashion Entrepreneurs",
      description:
        "Ambitious visionaries who have an idea and want to start their own clothing brand.",
        icon: "👩‍💼",
    },
    {
      title: "Emerging Designers",
      description:
        "Fashion students who aspire to start their own label.",
      icon: "🎓",
    },
    {
      title: "Small Business Owners",
      description:
        " Struggling brand owners looking to expand, scale, and build systems that create demand.",
      icon: "💡",
    },
    {
      title: "Brand Builders",
      description:
        " Designers with great creativity but unsure how to turn it into a profitable business.        ",
      icon: "🎨",
    },
    {
        title: "Brand Builders",
        description:
          "Founders who are about to launch or have launched their first collection. ",
        icon: "👗",
      },
  ];

  return (
    <section className="bg-linear-to-b from-rose-200 to-rose-200 mx-5 rounded-2xl p-15 px-6 md:px-16 ">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Who's this Masterclass for
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          This masterclass is designed for ambitious individuals ready to
          transform their clothing brand vision into reality.
        </p>
      </div>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[35vh] sm:min-w-[320px] md:min-w-[360px] bg-white rounded-2xl shadow-md shrink-0 snap-center p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-pink-200 text-pink-700 text-3xl w-14 h-14 flex items-center justify-center rounded-lg">
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

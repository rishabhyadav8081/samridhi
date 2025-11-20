import React from "react";

const Workshop = () => {
  const cards = [
    {
      title: "Market Research",
      description:
        "Identify what the market really wants.",
      icon: "📊 ",
    },
    {
      title: "Fashion Business Fundamentals",
      description:
        "Understand how to run a profitable brand.",
      icon: "🧵",
    },
    {
      title: "Competitor Analysis",
      description:
        "Study what’s working and why.",
      icon: "📈",
    },
    {
      title: "Range Planning & Parameters",
      description:
        "Structure your collection for sales.",
      icon: "📋 ",
    },
    {
      title: "Marketing for Fashion",
      description:
        "Learn what makes people actually buy.",
      icon: "💬",
    },
    {
        title: "Pricing Techniques",
        description:
          "Price your products for both value and profit.",
        icon: "💰 ",
      },
      {
        title: " Systems & Structures",
        description:
          "Build scalable workflows that sustain your brand.",
        icon: "⚙️",
      },
      {
        title: "How to Sell Better Than Your Competition",
        description:
          "Right techniques that will cut through competition.",
        icon: "💎",
      },
  ];

  return (
    <section className="bg-linear-to-b from-pink-50 to-white py-12 px-4 md:px-16 flex flex-col items-center ">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-900 mb-4">
          What Will You Learn in this Workshop
        </h2>
        <p className="text-rose-700 max-w-2xl mx-auto">
          Transform your clothing brand with these proven strategies and actionable insights.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-pink-200 text-pink-700 text-3xl w-14 h-14 flex items-center justify-center rounded-lg">
                {card.icon}
              </div>
            </div>
            <h3 className="font-semibold text-md text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm font-light">{card.description}</p>
          </div>
          
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center items-center pt-5">
          <button className="bg-rose-400 hover:bg-rose-500 hover:scale-[1.02] transition-all text-white font-semibold py-3 rounded-full w-full">
            Register Now @ Just ₹99 →
          </button>
        </div>
    </section>
  );
};

export default Workshop;

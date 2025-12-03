import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Pooja Agarwal",
    business: "Ethnic Wear Studio",
    result: "Scaled from ₹2L to ₹8L/month in 3 months",
    quote: "The Instagram strategies alone changed everything for me. I finally understand how to create content that sells. My DMs are flooded with orders now!",
    rating: 5
  },
  {
    name: "Rashi Sharma",
    business: "Contemporary Fashion Label",
    result: "Quit her corporate job to run her brand full-time",
    quote: "I was juggling a 9-5 and my passion project. This course gave me the confidence and systems to go all in. Best decision ever!",
    rating: 5
  },
  {
    name: "Meera Patel",
    business: "Boutique Store Owner",
    result: "Walk-ins increased by 300%",
    quote: "My store finally started getting walk-ins after applying her ad strategy. The offline growth module is pure gold!",
    rating: 5
  },
  {
    name: "Anjali Reddy",
    business: "Sustainable Fashion Brand",
    result: "First profitable quarter in 2 years",
    quote: "I was struggling with pricing and constantly undervaluing my work. Samriddhi's pricing module helped me increase margins without losing customers.",
    rating: 5
  },
  {
    name: "Priya Verma",
    business: "Designer Wear",
    result: "Collaborated with 5 major influencers",
    quote: "I had no idea how to approach influencers. Now I have ongoing collaborations with 5 influencers and sales have doubled!",
    rating: 5
  },
  {
    name: "Divya Singh",
    business: "Fusion Clothing Line",
    result: "Successfully launched at 3 exhibitions",
    quote: "The exhibition strategies were game-changing. I made more in one weekend than I did online in a month. Worth every penny!",
    rating: 5
  },
  {
    name: "Kavya Nair",
    business: "Kids Fashion Brand",
    result: "Automated 80% of her sales process",
    quote: "As a mom entrepreneur, time is everything. The automation strategies gave me my life back while growing my business.",
    rating: 5
  },
  {
    name: "Sneha Joshi",
    business: "Bridal Wear Studio",
    result: "Booked 6 months in advance",
    quote: "My brand story now connects emotionally with brides. I'm fully booked months in advance and can finally be selective with clients.",
    rating: 5
  },
  {
    name: "Tanvi Kapoor",
    business: "Streetwear Label",
    result: "From side hustle to ₹50L annual revenue",
    quote: "Started as a side hustle, now it's my primary income. This course taught me how to think like a CEO, not just a designer.",
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-12 md:py-3 px-4 bg-white relative overflow-hidden w-[40vh] mx-auto">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center  md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold  mb-4 text-black">
            Real Stories from Real Founders
          </h2>
          <p className="text-sm md:text-base text-[#805257]">
            Join hundreds of women who transformed their clothing brands
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center text-center overflow-x-auto scrollbar-hide gap-8 mt-5 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="shrink-0 w-80 md:w-96 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-rose-100 hover:border-rose-300 transition-all duration-500 hover:-translate-y-2 snap-center flex flex-col justify-center items-center mr-5"
              >
                <Quote className="w-10 h-10 text-[#805257] mb-4" />

                <div className="flex mb-4 ">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <i className="text-sm md:text-base text-[#805257] leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </i>

                <div className="border-t border-rose-100 pt-6">
                  <h4 className="font-bold text-black text-base mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#805257] text-sm mb-4">
                    {testimonial.business}
                  </p>
                  <div className="bg-cream-50 px-4 py-3 rounded-xl border border-rose-100">
                    <p className="text-[#805257] font-semibold text-sm">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-linear-to-b from-rose-300 to-rose-400  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-amber-200 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating sparkles */}
      <Sparkles className="absolute top-32 left-1/4 w-8 h-8 text-white/40 animate-float" />
      <Sparkles className="absolute top-1/3 right-1/4 w-6 h-6 text-white/30 animate-float-delayed" />
      <Sparkles className="absolute bottom-32 left-1/3 w-7 h-7 text-white/35 animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-8 animate-float">
          <Sparkles className="w-16 h-16 text-white mx-auto" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">"
          Your Brand Deserves to Grow —<br className="hidden md:block" />Let's Make It Happen"
        </h2>

        <p className="text-base md:text-lg text-rose-50 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          Join 500+ clothing founders who transformed their passion into a thriving business
        </p>

        <div className="bg-white/15 backdrop-blur-md rounded-[3rem] p-10 md:p-14 mb-16 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
            <div className="group cursor-default">
              <p className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">500+</p>
              <p className="text-xs text-rose-50">Happy Founders</p>
            </div>
            <div className="group cursor-default">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-amber-300 fill-amber-300 mr-1" />
                <p className="text-4xl md:text-5xl font-bold group-hover:scale-110 transition-transform">"4.87</p>
              </div>
              <p className="text-xs text-rose-50">Average Rating</p>
            </div>
            <div className="group cursor-default">
              <p className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">"5 Hours</p>
              <p className="text-xs text-rose-50">Of Expert Training</p>
            </div>
          </div>
        </div>


        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/15 shadow-2xl max-w-3xl mx-auto">
          <p className="text-white  text-sm italic leading-relaxed mb-4">
            "The only thing standing between you and your dream brand is the decision to start. This course gives you everything you need — the strategies, the support, the confidence. Take the leap."
          </p>
          <p className=" text-xs font-semibold">—  Samridh Agarwal, Founder of Peach It Up</p>
        </div>
      </div>
    </section>
  );
}

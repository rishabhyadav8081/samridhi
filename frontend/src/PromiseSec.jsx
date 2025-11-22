import { Shield, Sparkles, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function PromiseSection() {
  return (
    <section className="py-1 md:py-20 px-4   relative overflow-hidden m-5 rounded-2xl">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative mb-8 md:mb-12">
            {/* <Sparkles className="absolute -top-8 -left-8 w-8 h-8 text-rose-400 opacity-70 animate-pulse" />
            <Sparkles className="absolute -top-6 -right-10 w-6 h-6 text-rose-400 opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="absolute -bottom-8 -left-10 w-7 h-7 text-rose-400 opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
            <Sparkles className="absolute -bottom-6 -right-8 w-5 h-5 text-rose-400 opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }} /> */}
{/* 
            <div className="relative bbg-linear-to-b from-rose-200 to-rose-100  rounded-[3rem] p-12 md:p-16 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/20 to-transparent rounded-t-[3rem]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>

              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-xl border-4 border-white/30">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-pink-500" strokeWidth={2.5} />
                </div>

                <div className="bg-white/95 backdrop-blur-sm py-4 px-1 md:px-12 rounded-2xl relative shadow-xl">
                  <Sparkles className="absolute -top-2 -left-2 w-5 h-5 text-black" />
                  <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-black" />
                  <h2 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-rose-500 to-pink-300 bg-clip-text text-transparent text-center relative z-10">
                    OUR PROMISE TO YOU
                  </h2>
                </div>

                <p className=" text-base md:text-lg text-center mt-6 max-w-xl font-medium">
                  We're committed to your success. Here's our guarantee to help you build a thriving clothing brand.
                </p>
              </div>
            </div> */}
            <button className="outfit-title  bg-[#D88C8C] hover:bg-[#e38989] hover:scale-[1.02] transition-all text-white font-semibold py-3 px-20 rounded-full w-full">
            Our Promise To You
          </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all hover:-translate-y-2 hover:shadow-2xl  flex flex-col items-center">
              <div className="w-16 h-16 bg-[#D88C8C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                You Pay Only Once
              </h3>
              <p className="text-sm md:text-base  leading-relaxed text-[#805257]">
                Get lifetime access on a one-time payment and watch anytime, anywhere as per your convenience.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center">
              <div className="w-16 h-16 bg-[#D88C8C]  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                100% Refund Policy
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#805257]">
                Cancel anytime within 14 days of purchase and get a full refund, no questions asked.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center">
              <div className="w-16 h-16 bg-[#D88C8C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Free Upgrades
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#805257]">
                Gain all future updates, additions and changes made to the course at no additional cost.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

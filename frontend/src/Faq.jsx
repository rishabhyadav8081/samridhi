import {
  ChevronDown,
  HelpCircle,
  Globe,
  MessageCircle,
  GraduationCap,
  CreditCard,
  Clock,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What language is the course in?",
    answer:
      "The course is available in both English and Hindi. You can choose your preferred language or switch between them based on your comfort level.",
    icon: "Globe",
  },
  {
    question: "Will I get live support?",
    answer:
      "Yes! You'll have access to regular live Q&A sessions with Samriddhi, plus an exclusive community of fellow founders where you can ask questions, share experiences, and get support anytime.",
    icon: "MessageCircle",
  },
  {
    question: "Do I need prior experience in fashion or business?",
    answer:
      "Not at all! This course is designed for beginners and experienced founders alike. Whether you're just starting out or looking to scale, you'll find actionable strategies tailored to your stage.",
    icon: "GraduationCap",
  },
  {
    question: "Is it a one-time payment or subscription?",
    answer:
      "It's a one-time payment that gives you lifetime access to all course content, future updates, bonus materials, and community access. No hidden fees or recurring charges.",
    icon: "CreditCard",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "Forever! Once you enroll, you have unlimited lifetime access to all course materials, including any new content or updates we add in the future.",
    icon: "Clock",
  },
  {
    question: "Can I implement these strategies if I only sell online?",
    answer:
      "Absolutely! The course covers both online and offline strategies. You can focus on the modules most relevant to your business model, whether that's purely online, purely offline, or a hybrid approach.",
    icon: "ShoppingBag",
  },
  {
    question: "Will this work for my specific clothing niche?",
    answer:
      "Yes! The strategies taught are universal and work for all clothing niches — whether you're in ethnic wear, western fashion, kids clothing, sustainable fashion, or any other niche. We focus on core principles that apply across the board.",
    icon: "Sparkles",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const iconMap = {
    Globe,
    MessageCircle,
    GraduationCap,
    CreditCard,
    Clock,
    ShoppingBag,
    Sparkles,
  };

  return (
    <section className="py-8 md:py-12 px-4 bg-white relative overflow-hidden">
      {/* Decorative question marks */}
      <div className="absolute top-20 right-20 opacity-5">
        <HelpCircle className="w-64 h-64 text-rose-400" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-rose-900 mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-sm text-rose-700">
            Everything you need to know before enrolling
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = iconMap[faq.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:border-rose-400 hover:scale-105 hover:bg-linear-to-r hover:from-rose-50 hover:to-pink-50"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-transparent transition-colors group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center gap-4 pr-8">
                    <div className="shrink-0 w-10 h-10 bg-linear-to-br from-rose-400 to-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-rose-900 group-hover:text-rose-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <p className="text-xs leading-relaxed pl-14 text-rose-700">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-cream-50 rounded-3xl p-10 border border-rose-200 shadow-lg">
          <p className="text-sm text-rose-900 mb-2 font-medium">
            Still have questions?
          </p>
          <p className="text-xs text-rose-700 leading-relaxed">
            We're here to help! Reach out to us and we'll get back to you within
            24 hours.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-rose-100 hover:border-rose-300"
          >
            <svg
              className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-rose-100 hover:border-rose-300"
          >
            <svg
              className="w-7 h-7 text-rose-600 group-hover:text-rose-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-rose-100 hover:border-rose-300"
          >
            <svg
              className="w-8 h-8 text-red-600 group-hover:text-red-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

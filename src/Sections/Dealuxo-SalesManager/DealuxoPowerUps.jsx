import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import powerups1 from "../../assets/Sales-Manager/Powerups/Powerups1.png";
import powerups2 from "../../assets/Sales-Manager/Powerups/Powerups2.png";

const cards = [
  {
    img: powerups1,
    title: "Experience the future of productivity with Scripta AI",
    desc: "Our AI-powered Facebook Ad Writer helps you craft irresistible, high-converting ads in seconds. It analyzes your product, audience, and brand tone to generate scroll-stopping headlines, persuasive copy, and strong calls-to-action that grab attention and drive clicks. Whether you’re running a product launch, seasonal sale, or lead-gen campaign, this bot takes the guesswork out of writing and delivers ad copy that converts — faster, smarter, and always on-brand.",
    footer: (
      <>
        Your secret weapon for high–performing{" "}
        <span className="text-blue-600 font-semibold">Facebook</span> ads.
      </>
    ),
  },
  {
    img: powerups2,
    title: "Discover the timeless elegance of Fashion design",
    desc: "Our AI-powered Facebook Ad Writer helps you craft irresistible, high-converting ads in seconds. It analyzes your product, audience, and brand tone to generate scroll-stopping headlines, persuasive copy, and strong calls-to-action that grab attention and drive clicks. Whether you’re running a product launch, seasonal sale, or lead-gen campaign, this bot takes the guesswork out of writing and delivers ad copy that converts — faster, smarter, and always on-brand.",
    footer: (
      <>
        AI–powered <span className="text-orange-500 font-semibold">blog</span>{" "}
        writing that drives traffic and engagement.
      </>
    ),
  },
  {
    img: powerups1,
    title: "Elevate your campaigns to new heights",
    desc: "Our AI-powered Facebook Ad Writer helps you craft irresistible, high-converting ads in seconds. It analyzes your product, audience, and brand tone to generate scroll-stopping headlines, persuasive copy, and strong calls-to-action that grab attention and drive clicks. Whether you’re running a product launch, seasonal sale, or lead-gen campaign, this bot takes the guesswork out of writing and delivers ad copy that converts — faster, smarter, and always on-brand.",
    footer: (
      <>
        Your secret weapon for high–performing{" "}
        <span className="text-blue-600 font-semibold">Facebook</span> ads.
      </>
    ),
  },
  {
    img: powerups1,
    title: "Boost your workflow efficiency",
    desc: "Our AI-powered Facebook Ad Writer helps you craft irresistible, high-converting ads in seconds. It analyzes your product, audience, and brand tone to generate scroll-stopping headlines, persuasive copy, and strong calls-to-action that grab attention and drive clicks. Whether you’re running a product launch, seasonal sale, or lead-gen campaign, this bot takes the guesswork out of writing and delivers ad copy that converts — faster, smarter, and always on-brand.",
    footer: (
      <>
        Your secret weapon for high–performing{" "}
        <span className="text-blue-600 font-semibold">Facebook</span> ads.
      </>
    ),
  },
  {
    img: powerups2,
    title: "Design smarter, not harder",
    desc: "Our AI-powered Facebook Ad Writer helps you craft irresistible, high-converting ads in seconds. It analyzes your product, audience, and brand tone to generate scroll-stopping headlines, persuasive copy, and strong calls-to-action that grab attention and drive clicks. Whether you’re running a product launch, seasonal sale, or lead-gen campaign, this bot takes the guesswork out of writing and delivers ad copy that converts — faster, smarter, and always on-brand.",
    footer: (
      <>
        AI–powered <span className="text-orange-500 font-semibold">blog</span>{" "}
        writing that drives traffic and engagement.
      </>
    ),
  },
];

const DealuxoPowerUps = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth / 2.5;
      containerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Text */}
        <div className="md:col-span-1 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            <span className="bg-gradient-to-r from-[#FFB200] to-[#FF7700] bg-clip-text text-transparent font-bold">
              Dealuxi
            </span>{" "}
            can automate your work even more with power-ups.
          </h2>
        </div>

        {/* Cards */}
        <div className="md:col-span-3">
          <div ref={containerRef} className="flex gap-6 overflow-hidden">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-[calc(100%/2.5)] flex-shrink-0"
              >
                {/* Card wrapper (double rectangle effect) */}
                <div className="relative w-full h-[420px]">
                  {/* Back rectangle */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full"></div>

                  {/* Front card */}
                  <div className="relative rounded-2xl p-6 bg-gradient-to-b from-[#A45A00] to-[#3B2100] text-white flex flex-col h-full">
                    <img
                      src={card.img}
                      alt={card.title}
                      className={`w-40 h-40 z-50 -mt-8 ${
                        idx % 2 === 0 ? "ml-0" : "ml-auto mr-0"
                      }`}
                    />
                    <div className="rounded-xl rounded-br-none rounded-bl-none p-6 bg-gradient-to-b from-[#D68727] to-[#6D3100] text-white -mt-11 flex-1">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className="text-sm mt-2 opacity-90">{card.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Footer outside card */}
                <p className="mt-0 text-sm font-medium text-gray-700 max-w-xs text-left">
                  {card.footer}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows below cards */}
          <div className="flex justify-end mt-6 gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-orange-500 flex items-center justify-center text-orange-600 hover:bg-orange-100"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-orange-500 flex items-center justify-center text-orange-600 hover:bg-orange-100"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealuxoPowerUps;

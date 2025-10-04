import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import winImg from "../../assets/win_bg.png";

const cards = [
  { title: "Card 1", desc: "Description 1" },
  { title: "Card 2", desc: "Description 2" },
  { title: "Card 3", desc: "Description 3" },
  { title: "Card 4", desc: "Description 4" },
];

const ScriptaPowerups = () => {
  return (
    <section className="mt-20">
      {/* Hero section */}
      <div className="bg-gradient-to-b from-[#D68727] to-[#6D3100] flex flex-col pt-10 justify-center items-center">
        <h1 className="relative font-alata text-5xl text-center top-80 text-white z-10">
          You wanna enhance your work <br /> with{" "}
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-stroke">
            Super Powers
          </span>
        </h1>
        <img src={winImg} alt="" className="relative top-1 max-w-sm" />
      </div>

      {/* Powerup SLider */}
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        {/* Left Side Slider */}
        <div className="rounded-lg w-44 flex items-center justify-center">
          <p className="text-3xl font-bold"><span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text ">Scripta</span> can automate your work even more with power-ups</p>
        </div>

        {/* Right Side Multi-Card Slider */}
        <div className="w-10/12">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <div className="h-40 w-full bg-gray-300 rounded-md flex items-center justify-center">
                    <p className="font-bold">{card.title}</p>
                  </div>
                  <p className="mt-2 text-center">{card.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ScriptaPowerups;
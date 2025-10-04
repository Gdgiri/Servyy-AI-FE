import React from "react";
import image1 from "../../assets/Sales-Manager/Section1.png";
import image2 from "../../assets/Sales-Manager/section3.png";
import image3 from "../../assets/Sales-Manager/section2.png";

const DealuxoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 leading-snug">
        <span className="text-[#D03E3E]">Dealuxo</span> Excels In Crafting Ads,
        Newsletters, Landing Pages, And Blogs That Convert Well, For All Brands
        And Industries.
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Large Left Image */}
        <div className="relative col-span-1 md:col-span-2 h-full">
          <img
            src={image1}
            alt="Dealuxo AI 1"
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
            <p className="text-sm font-medium text-[#D03E3E]">Dealuxo</p>
            <p className="text-gray-800 text-sm">Hey, you know about this ?</p>
          </div>
        </div>

        {/* Right Two Stacked Images */}
        <div className="flex flex-col gap-6 h-full">
          {/* Top right image */}
          <div className="relative flex-1">
            <img
              src={image2}
              alt="Dealuxo AI 2"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm font-medium text-[#D03E3E]">Dealuxo</p>
              <p className="text-gray-800 text-sm">
                Your next email letter is ready! <br />
                It features the latest industry news, <br />a customer story.
              </p>
            </div>
          </div>

          {/* Bottom right image */}
          <div className="relative flex-1">
            <img
              src={image3}
              alt="Dealuxo AI 3"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm font-medium text-orange-500">Dealuxo</p>
              <p className="text-gray-800 text-sm">
                Hey! I have some super powers <br />
                scroll down to explore...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealuxoSection;

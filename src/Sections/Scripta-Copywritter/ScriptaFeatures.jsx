import React from "react";
import potentialImg from "../../assets/potential.png";
import secretImg from "../../assets/secret.png";
import tableImg from "../../assets/Table.png";
import winImg from "../../assets/win.png";
import wallImg from "../../assets/wall.png";

const highlightsData = [
  {
    question: "Scripta, give me a script for video ad",
    answer:
      "Here’s your ready-to-use video ad script! We’ll open with a strong hook to grab attention, highlight your audience’s pain point, and introduce your product as the solution. Then, we’ll showcase the key benefits in quick, engaging scenes to keep viewers interested, and wrap up with a powerful call-to-action that inspires them to click, buy, or sign up.",
  },
  {
    question: "Scripta, give me a script for video ad",
    answer:
      "Here’s a script tailored just for you! We’ll kick things off with a catchy hook that grabs attention in the first three seconds. Then we’ll quickly connect with your audience by highlighting their pain points before introducing your product as the perfect solution. I’ll sprinkle in quick, engaging scene suggestions to keep the pacing tight and exciting.",
  },
];
const ScriptaFeatures = () => {
  return (
    <section className="relative min-h-screen">
      {/* POtential section */}
      <div className="inset-0">
        <img
          src={potentialImg}
          alt=""
          className="hidden sm:block w-full h-full object-cover"
        />
      </div>

      {/* Features */}
      <div className="flex mt-20">
        {/* Left side */}
        <div className="flex flex-col relative left-52">
          <h3 className="w-7/12 font-alata text-3xl mb-10">
            <span className="font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Scripta
            </span>{" "}
            excels in crafting Ads,Newsletters and Blogs that convert well, for
            all brands and industries
          </h3>
          <img src={secretImg} alt="" className="max-w-xl" />
        </div>
        {/* Right side */}
        <div className="relative right-56">
          <img src={tableImg} alt="" className="w-full mb-5" />
          <img src={winImg} alt="" className="max-w-sm" />
        </div>
      </div>

      {/* Highlights section */}
      <div className="flex mt-20">
        {/* Cards */}
        <div className="relative p-6 grid md:grid-cols-2 gap-6 font-alata max-w-4xl left-52">
          {highlightsData.map((item, index) => (
            <div
              key={index}
              className=" bg-gradient-to-tl from-orange-400 to-orange-600 shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl text-white mb-3">
                💡 {item.question}
              </h3>
              <p className="text-black leading-relaxed text-lg">{item.answer}</p>
            </div>
          ))}
        </div>
        {/* Bot */}
        <div className="relative left-1 top-16">
            <img src={wallImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ScriptaFeatures;

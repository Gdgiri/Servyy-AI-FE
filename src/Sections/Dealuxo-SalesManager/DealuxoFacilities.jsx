import React from "react";
import magnifer from "../../assets/Sales-Manager/Facility/magnifier.png";
import super1 from "../../assets/Sales-Manager/Facility/super.png";
import quote from "../../assets/Sales-Manager/Facility/quoteFilled.svg";

function DealuxoFacilities() {
  return (
    <div className="relative w-full mx-auto h-full bg-gradient-to-b from-[#FFAD4A] to-[#4B2700] p-12">
      {/* Title */}
      <h1 className="text-white text-[50px] md:text-[60px] font-poppins font-semibold leading-[50px]] w-full">
        Your creative director in a bot <br />
        Scripta makes every second count.
      </h1>

      {/* Content Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Card 1 */}
        <div
          className="bg-gradient-to-r from-[#FFBD91] to-[#CB6900] p-6 rounded-2xl"
          style={{ boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.39)" }}
        >
          <p className="text-white text-[25px] font-alata font-semibold leading-[45px] tracking-[-0.04em] flex gap-1">
            <img src={quote} alt="" /> A surprising thing about Scripta...
          </p>

          <p className="text-black text-[30px] font-alata font-semibold tracking-[-0.04em] mt-2 leading-[45px]">
            Can generate 100 headlines in under 5 minutes. Without breaking a
            sweat.
          </p>
        </div>

        {/* Astronaut 1 outside */}
        <div className="flex justify-end">
          {/* <img src={super1} alt="super robo" /> */}
        </div>

        {/* Astronaut 2 outside */}
        <div className="flex justify-end order-last md:order-none">
          {/* <img src={magnifier} alt="magnifier robo" /> */}
        </div>

        {/* Card 2 (with Image 1 inside as absolute, overlapping outside allowed) */}
        <div
          className="relative bg-gradient-to-r from-[#FFBD91] to-[#CB6900] p-6 rounded-2xl"
          style={{ boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.39)" }}
        >
          <p className="text-white text-[25px] font-alata font-semibold leading-[45px] tracking-[-0.04em] flex gap-1">
            <img src={quote} alt="" /> Capabilities of Scripta
          </p>

          <p className="text-black text-[30px] font-alata font-semibold tracking-[-0.04em] mt-2 leading-[45px]">
            Hook Mastery, Scene & Story, Wizardry CTA Genius, Audience,
            Magnetizing
          </p>

          {/* Absolute Astronaut 1 (overlapping outside) */}
          <img
            src={super1}
            alt="super robo"
            className="absolute "
            style={{ bottom: "145px", right: "35px" }}
          />
        </div>

        {/* Card 3 (with Image 2 inside as absolute, overlapping outside allowed) */}
        <div
          className="relative bg-gradient-to-r from-[#FFBD91] to-[#CB6900] p-6 rounded-2xl"
          style={{ boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.39)" }}
        >
          <p className="text-white text-[25px] font-alata font-semibold leading-[45px] tracking-[-0.04em] flex gap-1">
            <img src={quote} alt="" /> Scripta's hidden talent?
          </p>

          <p className="text-black text-[30px] font-alata font-semibold tracking-[-0.04em] mt-2 leading-[45px]">
            The art of hooking audiences in seconds...
          </p>

          {/* Absolute Astronaut 2 (overlapping outside) */}
          <img
            src={magnifer}
            alt="magnifier robo"
            className="absolute"
            style={{ bottom: "107px", right: "-60px" }}
          />
        </div>

        {/* Empty placeholders (you can remove if not needed) */}
        <div className="flex justify-end order-last md:order-none"></div>
        <div className="flex justify-end order-last md:order-none"></div>

        {/* Card 4 */}
        <div
          className="bg-gradient-to-r from-[#FFBD91] to-[#CB6900] p-6 rounded-2xl"
          style={{ boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.39)" }}
        >
          <p className="text-white text-[25px] font-alata font-semibold leading-[45px] tracking-[-0.04em] flex gap-1">
            <img src={quote} alt="" /> Strengths of Scripta
          </p>

          <ul className="text-black text-[30px] font-alata font-semibold tracking-[-0.04em] mt-2 leading-[45px] space-y-2 p-4">
            <li className="list-disc">
              Binge-watching viral ads for inspiration
            </li>
            <li className="list-disc">Turning ideas into cinematic scripts</li>
            <li className="list-disc">Experimenting with creative hooks</li>
            <li className="list-disc">Playing with pacing and suspense</li>
            <li className="list-disc">Crafting CTAs that actually convert</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DealuxoFacilities;

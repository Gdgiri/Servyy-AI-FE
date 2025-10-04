import React from "react";
import brain from "../../assets/Sales-Manager/Brains/brain.png";
import addWebIcon from "../../assets/Sales-Manager/Brains/iconAddWeb.svg";
import fileIcon from "../../assets/Sales-Manager/Brains/iconFile.svg";
import medicalFileIcon from "../../assets/Sales-Manager/Brains/iconMedicalFiles.svg";
import aichip from "../../assets/Sales-Manager/Brains/aichip.png";
import Vector2 from "../../assets/Sales-Manager/Brains/Vector2.png";
import Vector1 from "../../assets/Sales-Manager/Brains/Vector1.png";

function DealuxoBrain() {
  return (
    <section className="relative w-full mx-auto h-full  bg-gradient-to-b from-[#4B2700] to-blue-950  text-white flex flex-col items-center justify-center p-12">
      {/* Top Heading */}
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          Powered by your ideas, made to inspire –
          <span className="text-orange-400">Scripta.</span>
        </h1>
      </div>
      <p className="mt-4 text-gray-200  p-4">
        Turning imagination into storyboards and hooks that hit the mark
      </p>
      {/* Main Content */}
      <div className="relative flex justify-center items-center mt-16 w-full">
        {/* ==== Left Cards ==== */}
        <div className="absolute left-10 flex flex-col gap-8">
          {/* Top Left Card */}
          <div className="flex bg-linear-to-r from-[#813B01] to-[#9C6538] items-center rounded-xl p-3 shadow-lg w-64 hover:scale-105 transition-transform inset-shadow-sm inset-shadow-[#FF8C00]">
            <div className="w-25 h-25">
              <img
                src={addWebIcon}
                alt="add web"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-semibold">Write</h3>
              <p className="text-sm font-light">
                Turns rough concepts into polished ad scripts.
              </p>
            </div>
          </div>

          {/* Bottom Left Card */}
          <div className="flex bg-linear-to-r from-[#813B01] to-[#9C6538] items-center rounded-xl shadow-lg w-64 hover:scale-105 transition-transform inset-shadow-sm inset-shadow-[#FF8C00] ml-[180px] p-2">
            <div className="w-20 h-20">
              <img
                src={medicalFileIcon}
                alt="add web"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Files Read</h3>
              <p className="text-sm font-light">
                You can upload your files and documents to Scripta to process
              </p>
            </div>
          </div>
        </div>

        {/* ==== Right Card ==== */}
        <div className="absolute right-10 top-20">
          <div className="flex bg-linear-to-r from-[#813B01] to-[#9C6538] items-center rounded-xl p-3 shadow-lg w-64 hover:scale-105 transition-transform inset-shadow-sm inset-shadow-[#FF8C00]">
            <div className="w-20 h-20">
              <img
                src={fileIcon}
                alt="add web"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Questions</h3>
              <p className="text-sm font-light">
                Answer question all about your idea and doubts
              </p>
            </div>
          </div>
        </div>

        {/* ==== Center Astronaut ==== */}
        <img
          src={brain}
          alt="Astronaut Character"
          className="w-80 md:w-80 drop-shadow-2xl"
        />
      </div>

      {/* Ai Chip  Total Container */}
      <div className="relative w-[1125px] rounded-xl bg-gradient-to-b from-[#2D2F40] to-[#21295E]">
        <h2 className="text-gray-400 text-xl p-6">
          <span className="text-[#FFFFFF] text-xl">
            Your brain, used across tasks.
          </span>
          Enable all your
          <br /> AI Employees to provide better results.
        </h2>

        {/* Center the content*/}
        <div className=" flex flex-col items-center justify-center px-6 py-16">
          {/* Container */}
          <div className="relative flex items-center justify-center">
            {/* AI Chip */}
            <div className="w-[260px] h-[260px] ] relative z-10">
              <img src={Vector2} alt="" className="max-w-[329px]" />
              <img
                src={aichip}
                alt="AI Chip"
                className="w-full h-full object-contain absolute top-[-5px] right-[-8px]"
              />
              <img
                src={Vector1}
                alt=""
                className="max-w-[59px]  bottom-[-20px] right-[165px]"
              />
            </div>

            {/* Floating Cards with Connector Lines */}
            {/* Left Top */}
            <div className="absolute -left-55 top-11 rotate-[-15deg]">
              <div className="relative bg-gradient-to-b from-[#2D2F40] to-[#21295E] text-sm px-4 py-2 rounded-md shadow-lg border border-white/10">
                Create a script for
                <span className="text-sky-400">LinkedIn</span> post
              </div>
            </div>

            {/* Left Middle */}
            <div className="absolute -left-61 top-35 rotate-[-10deg]">
              <div className="relative bg-gradient-to-b from-[#2D2F40] to-[#21295E] text-sm px-4 py-2 rounded-md shadow-lg border border-white/10">
                Create a script for the
                <span className="text-sky-400">Facebook</span> ad
              </div>
            </div>

            {/* Left Bottom */}
            <div className="absolute -left-68 -bottom-5 rotate-[0deg]">
              <div className="relative bg-gradient-to-b from-[#2D2F40] to-[#21295E] text-sm px-4 py-2 rounded-md shadow-lg border border-white/10">
                Create a script for the
                <span className="text-red-500">YouTube</span> content
              </div>
            </div>

            {/* Right Top */}
            <div className="absolute -right-65 -top-12 rotate-[-10deg]">
              <div className="relative bg-gradient-to-b from-[#2D2F40] to-[#21295E] text-sm px-4 py-2 rounded-md shadow-lg border border-white/10">
                <p>Hey, where you developed?</p>
                <p className="text-amber-400 font-medium">Vizag, India</p>
              </div>
            </div>

            {/* Right Bottom */}
            <div className="absolute -right-56 bottom-10 rotate-[10deg]">
              <div className="relative bg-gradient-to-b from-[#2D2F40] to-[#21295E] text-sm px-4 py-2 rounded-md shadow-lg border border-white/10">
                <p>What's your hobby?</p>
                <p className="text-amber-400 font-medium">Updating myself</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealuxoBrain;

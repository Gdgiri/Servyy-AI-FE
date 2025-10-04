import React from "react";
import Heroimage from "../../assets/Sales-Manager/Powerups/superpower.png";

const DealuxoSuperPower = () => {
  return (
    <div className="relative w-full max-w-full h-[600px] overflow-hidden  mx-auto bg-gradient-to-b from-[#FFAD4A] to-[#854900]">
      <img
        src={Heroimage}
        alt="Design"
        className="w-[420px] h-[660px] ml-[550px] mt-2 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-sm md:text-base lg:text-5xl mt-36 font-semibold text-center px-2">
          You wanna Enhance your <br />
          work with{" "}
          <span
            className="font-bold bg-gradient-to-r from-[#FFB200] to-[#FF7700] bg-clip-text text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Super Powers
          </span>
        </h2>
      </div>
    </div>
  );
};
export default DealuxoSuperPower;

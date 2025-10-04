import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/heroBg.png";
import heroBot from "../../assets/heroBot.png";
import mobileBg from "../../assets/mobileHeroBg.png";

const ScriptaHeroSection = () => {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const botVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, delay: 0.5 },
    },
  };

  const bgVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section>
      {/* Hero section */}
      <div className="relative h-screen">
        {/* Animated Text */}
        <motion.div
          className="absolute sm:w-96 text-center top-44 sm:left-[38%] z-10 text-white text-4xl md:text-4xl font-alata"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>Hey your Copywritter Scripta is Here...</h3>
        </motion.div>

        <div>
          {/* Desktop Bg */}
          <motion.img
            src={heroBg}
            alt=""
            className="hidden sm:block absolute scale-105 inset-0 object-cover"
            variants={bgVariant}
            initial="hidden"
            animate="visible"
          />

          {/* Mobile Bg */}
          <motion.img
            src={mobileBg}
            alt=""
            className="sm:hidden absolute w-[450px] h-[660px] inset-0 object-cover"
            variants={bgVariant}
            initial="hidden"
            animate="visible"
          />

          {/* Desktop Bot */}
          <motion.img
            src={heroBot}
            alt=""
            className="hidden sm:block relative top-80 left-[33%] scale-125"
            variants={botVariant}
            initial="hidden"
            animate="visible"
          />

          {/* Mobile Bot */}
          <motion.img
            src={heroBot}
            alt=""
            className="sm:hidden relative top-52"
            variants={botVariant}
            initial="hidden"
            animate="visible"
          />
        </div>
      </div>
    </section>
  );
};

export default ScriptaHeroSection;

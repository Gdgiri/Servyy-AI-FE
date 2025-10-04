import React from "react";
import Layout from "../components/Layout";
import DealuxiHeroSection from "../Sections/Dealuxo-SalesManager/DealuxiHeroSection";
import DealuxiAbout from "../Sections/Dealuxo-SalesManager/DealuxiAbout";
import DealuxoPotential from "../Sections/Dealuxo-SalesManager/DealuxoPotential";
import DealuxoSection from "../Sections/Dealuxo-SalesManager/DealuxoSection";
import DealuxoFeatures from "../Sections/Dealuxo-SalesManager/DealxoFeatures";
import DealuxoBrain from "../Sections/Dealuxo-SalesManager/DealuxoBrain";
import DealuxoSuperPower from "../Sections/Dealuxo-SalesManager/DealuxoSuperPower";
import DealuxoFacilities from "../Sections/Dealuxo-SalesManager/DealuxoFacilities";
import DealuxoPowerUps from "../Sections/Dealuxo-SalesManager/DealuxoPowerUps";

const SalesManager = () => {
  return (
    <>
      <Layout>
        <DealuxiHeroSection />
        <DealuxiAbout />
        <DealuxoPotential />
        <DealuxoSection />
        <DealuxoBrain />
        <DealuxoFacilities />
        <DealuxoSuperPower />
        <DealuxoPowerUps />
        <DealuxoFeatures />
      </Layout>
    </>
  );
};

export default SalesManager;

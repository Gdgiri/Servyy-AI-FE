import React from 'react'
import Layout from '../components/Layout'

import ScriptaAbout from '../Sections/Scripta-Copywritter/ScriptaAbout'
import ScriptaHeroSection from '../Sections/Scripta-Copywritter/ScriptaHeroSection'
import ScriptaFeatures from '../Sections/Scripta-Copywritter/ScriptaFeatures'
import Powerups from '../Sections/Scripta-Copywritter/ScriptaPowerups'

const CopyWritterPage = () => {
  return (
    <Layout>
        <ScriptaHeroSection />
        <ScriptaAbout />
        <ScriptaFeatures />
        <Powerups />
    </Layout>
  );
};

export default CopyWritterPage;

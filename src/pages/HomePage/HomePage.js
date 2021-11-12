import React from 'react';
import DronesSection from './DronesSection/DronesSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import HeroSection from './HeroSection/HeroSection';

const HomePage = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <DronesSection></DronesSection>
        </>
    );
};

export default HomePage;
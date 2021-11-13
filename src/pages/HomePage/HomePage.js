import React from 'react';
import HeaderNavigation from '../SharedComponents/HeaderNavigation/HeaderNavigation';
import DronesSection from './DronesSection/DronesSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import HeroSection from './HeroSection/HeroSection';

const HomePage = () => {
    return (
        <>
            <HeaderNavigation></HeaderNavigation>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <DronesSection></DronesSection>
        </>
    );
};

export default HomePage;
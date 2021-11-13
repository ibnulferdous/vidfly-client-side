import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import HeaderNavigation from '../SharedComponents/HeaderNavigation/HeaderNavigation';
import TutorialsSection from '../SharedComponents/TutorialsSection/TutorialsSection';
import DronesSection from './DronesSection/DronesSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import HeroSection from './HeroSection/HeroSection';
import ReviewsSection from './ReviewsSection/ReviewsSection';

const HomePage = () => {
    return (
        <>
            <HeaderNavigation></HeaderNavigation>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <DronesSection></DronesSection>
            <ReviewsSection></ReviewsSection>
            <TutorialsSection></TutorialsSection>
            <Footer></Footer>
        </>
    );
};

export default HomePage;
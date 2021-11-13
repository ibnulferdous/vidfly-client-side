import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import HeaderNavigation from '../SharedComponents/HeaderNavigation/HeaderNavigation';
import TutorialsSection from '../SharedComponents/TutorialsSection/TutorialsSection';
import ExploreAllSecTwo from './ExploreAllSecTwo/ExploreAllSecTwo';
import ExploreHeroSection from './ExploreHeroSection/ExploreHeroSection';

const ExploreAllPage = () => {
    return (
        <div>
            <HeaderNavigation></HeaderNavigation>
            <ExploreHeroSection></ExploreHeroSection>
            <ExploreAllSecTwo></ExploreAllSecTwo>
            <TutorialsSection></TutorialsSection>
            <Footer></Footer>
        </div>
    );
};

export default ExploreAllPage;
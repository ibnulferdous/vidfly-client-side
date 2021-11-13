import React from 'react';
import HeaderNavigation from '../SharedComponents/HeaderNavigation/HeaderNavigation';
import ExploreAllSecTwo from './ExploreAllSecTwo/ExploreAllSecTwo';
import ExploreHeroSection from './ExploreHeroSection/ExploreHeroSection';

const ExploreAllPage = () => {
    return (
        <div>
            <HeaderNavigation></HeaderNavigation>
            <ExploreHeroSection></ExploreHeroSection>
            <ExploreAllSecTwo></ExploreAllSecTwo>
        </div>
    );
};

export default ExploreAllPage;
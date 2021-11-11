import { render } from '@testing-library/react';
import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css';

const HeroSection = () => {
    let settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };


    
    


    return (
        <header>
            <div className="container my-7">
                <div className="row">
                    <div className="col z-index-1">
                        <h1 className="text-capitalize fw-800 display-1">The ultimate drone
                            <br className="d-none d-md-block" /> guide and store...
                        </h1>
                    </div>
                    <div className="w-100"></div>
                    <div className="col slider-container">
                        <Slider {...settings} className="d-none d-lg-block">
                            <div>
                                <img src="https://i.postimg.cc/Bvs8ZXFj/slider-3.jpg" alt="slider" />
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/NMj5TSpY/slider-2.jpg" alt="slider" />
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/fyzz1rVy/slider-5.jpg" alt="slider" />
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/xTqYHHHw/slider-6.jpg" alt="slider" />
                            </div>
                        </Slider>
                        <img src="https://i.postimg.cc/Xq9kpJ8p/hero-drone-1.jpg" alt="drone" className="img-fluid d-block d-lg-none" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
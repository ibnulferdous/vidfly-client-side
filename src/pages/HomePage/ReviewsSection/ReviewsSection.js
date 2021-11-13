import * as React from 'react';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';


const ReviewsSection = () => {
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        fetch('https://immense-atoll-58218.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);


    // Slider settings
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
        <section>
            <div className="container mb-7">
                <div className="row py-5">
                    <div className="col">
                        <img src="https://i.postimg.cc/R0752QCK/11.jpg" alt="drone" className="img-fluid" />
                        <div className="bg-white form-padding border-bottom border-dark border-5">
                            <Slider {...settings} className="d-lg-block">
                                {
                                    reviews.map(review => 
                                        <div key={review._id}>
                                            <p className="text-center fs-5 fw-700 mb-4">{review.review}</p>
                                            <div className="d-flex justify-content-center align-items-center pb-3">
                                                <Rating name="read-only" value={parseFloat(review.rating)} readOnly />
                                            </div>
                                            <p className="text-center mb-4">{review.name}</p>
                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
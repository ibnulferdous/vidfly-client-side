import React from 'react';
import './TutorialsSection.css';

const TutorialsSection = () => {
    return (
        <section className="tutorials-section">
            <div className="container">
                <div className="row vh-100 align-items-center">
                    <div className="col-md-6 col-lg-5">
                        <h1 className="text-capitalize text-white fw-800 display-1">Learn To Fly</h1>
                        <p className="text-white mt-4">Your Complete Guide to Drone Operation and Video Editing. It's no doubt that aerial shots and video offer a fresh perspective ...</p>

                        <a 
                            className="my-4 btn vf-button-white" 
                            href="https://www.youtube.com/" 
                            target="_blank"
                            rel="noreferrer"
                        >Youtube</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorialsSection;
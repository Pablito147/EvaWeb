import React from 'react'
import profilePicture from '../../../pictures/Oznamko.jpg';
import wave from '../../../pictures/wave4.svg';
import Button from '../../Button';


import './AboutMe.css'

function AboutMe({ aboutSec }) {
    return (
        <div>
            <section className="about-me" ref={aboutSec}>
                <div className="about-me__img">
                    <img src={profilePicture} alt="ME" />
                </div>
                <div className="about-me__content">
                    <h2 className="about-me__content--title">About Me</h2>
                    <p className="about-me__content--para">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                        laudantium maiores aliquid magni debitis ipsum delectus impedit iure
                        distinctio, sint tempora asperiores odit tempore temporibus
                        incidunt, non ex expedita sunt.
                    </p>
                    <Button></Button>
                </div>
            </section>

        </div>
    )
}

export default AboutMe

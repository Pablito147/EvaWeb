import React from 'react'

import './Projects.css'
import project1 from '../../pictures/Project1.png'
import project2 from '../../pictures/Project2.jpg'
import project3 from '../../pictures/Project3.jpg'
import project4 from '../../pictures/Project4.png'


const Projects = ({ projectSec }) => {
    return (
        <div ref={projectSec}>
            <h1 className='title'>My projects</h1>
            <section id="testimonials">
                <div className="testimonials__card">
                    <div className="testimonials__card--img">
                        <img src={project1} alt="mondernHouse" />
                    </div>
                    <div className="testimonials__card--content">
                        <h3 className="testimonials__card--content__title">Modern house</h3>
                        <p className="testimonials__card--content__para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                     </p>
                    </div>
                </div>

                <div className="testimonials__card">
                    <div className="testimonials__card--img">
                        <img src={project2} alt="bytovka" />
                    </div>
                    <div className="testimonials__card--content">
                        <h3 className="testimonials__card--content__title">Apartment building</h3>
                        <p className="testimonials__card--content__para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    </p>
                    </div>
                </div>

                <div className="testimonials__card">
                    <div className="testimonials__card--img">
                        <img src={project3} alt="Inside spa" />
                    </div>
                    <div className="testimonials__card--content">
                        <h3 className="testimonials__card--content__title">Spa interiour</h3>
                        <p className="testimonials__card--content__para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            sunt quis cupiditate ducimus non esse?
                     </p>
                    </div>
                </div>

                <div className="testimonials__card">
                    <div className="testimonials__card--img">
                        <img src={project4} alt="Aquapark" />
                    </div>
                    <div className="testimonials__card--content">
                        <h3 className="testimonials__card--content__title">
                            Aquapark
                    </h3>
                        <p className="testimonials__card--content__para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Projects

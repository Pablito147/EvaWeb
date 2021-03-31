import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import './Skills.css';

function Skills({ skillsSec }) {

    return (
        <section id="skills">
            <div className="skills__design" ref={skillsSec}>
                <h3 className="skills__design--title">Architecture Skills</h3>

                <h4>Design</h4>
                <div className="skills__design--progress">
                    <span className="skills__design--progress__1"></span>
                </div>

                <h4> 3D Design</h4>
                <div className="skills__design--progress">
                    <span className="skills__design--progress__2"></span>
                </div>

                <h4>Visualisation Design</h4>
                <div className="skills__design--progress">
                    <span className="skills__design--progress__3"></span>
                </div>

                <h4>Graphic Design</h4>
                <div className="skills__design--progress">
                    <span className="skills__design--progress__4"></span>
                </div>
            </div>
        </section>
    )
}

export default Skills;

import React, { useRef } from 'react'

import './Home.css'

import About from '../../Components/Home/AboutMe/AboutMe';
import Skills from './../Skills/Skills';
import Projects from './../Projects/Projects';
import Footer from './../Footer/Footer';
import Navbar from './../Navbar';




function Home() {
    const footerSec = useRef(null);
    const goToFooter = () => window.scrollTo({ top: footerSec.current.offsetTop, behavior: "smooth" })
    const projectSec = useRef(null);
    const goToProject = () => window.scrollTo({ top: projectSec.current.offsetTop, behavior: "smooth" })
    const skillsSec = useRef(null);
    const goToSkills = () => window.scrollTo({ top: skillsSec.current.offsetTop, behavior: "smooth" })
    const aboutSec = useRef(null);
    const goToAbout = () => window.scrollTo({ top: aboutSec.current.offsetTop, behavior: "smooth" })
    const homeSec = useRef(null);
    const goToHome = () => window.scrollTo({ top: homeSec.current.offsetTop, behavior: "smooth" })



    return (
        <>
            <div className='hero-container'>
                <h1>Eva Design</h1>
                <p>Hey I am Eva and it is my cyxsd my presonal landing page </p>
            </div>
            <Navbar goToFooter={goToFooter} goToSkills={goToSkills} goToProject={goToProject} goToAbout={goToAbout} homeSec={homeSec} goToHome={goToHome}></Navbar>
            <About aboutSec={aboutSec}></About>
            <Skills skillsSec={skillsSec}></Skills>
            <Projects projectSec={projectSec}></Projects>
            <Footer footerSec={footerSec}></Footer>
        </>
    )
}

export default Home

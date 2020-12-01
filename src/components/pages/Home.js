import React from 'react';
import '../../App.css';
import About from '../About';
import Herosection from '../Herosection';
import Skills from '../Skills';
import Project from '../Project';
import Footer from '../Footer';




function Home() {
    return (
        <div>
            <Herosection />
            <About />
            <Project />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home

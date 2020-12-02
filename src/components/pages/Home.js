import React from 'react';
import '../../App.css';
import About from '../About';
import Herosection from '../Herosection';
import Project from '../Project';
import Footer from '../Footer';




function Home() {
    return (
        <div>
            <Herosection />
            <About />
            <Project />
            <Footer />
        </div>
    )
}

export default Home

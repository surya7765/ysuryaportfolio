import React from 'react';
import './Herosection.css';
import '../App.css';

function Herosection() {
    return (
        <div className="hero-container">
            <img src="codder.jpg" alt="Hello"/>
            <h1>I'm a developer</h1>
            <p>IT engineer / self taught programmer.</p>
            <button > <a className="a" rel="noreferrer" href="https://www.canva.com/design/DAELIqAkyI0/I9ZaKaN7dOV_4AiWyiFtYQ/view?utm_content=DAELIqAkyI0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" style={{textDecoration:"none"}}> Resume </a> </button>
        </div>
    )
}

export default Herosection

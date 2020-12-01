import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Yugandhar Surya 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects/Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href='https://suryablog.herokuapp.com/' className='nav-links' onClick={closeMobileMenu}>
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>            
            </nav>
        </>
    )
}

export default Navbar

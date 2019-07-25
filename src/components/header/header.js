import React from 'react';
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <ul className="mr-auto navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Main</Link></li>
                <li className="nav-item"><Link to="/add-blog" className="nav-link">Add my blog</Link></li>
            </ul>
        </nav>
    );
};
export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import styles from './NavBar.module.scss'; // Import CSS for NavBar styling

console.log(styles); // Log the styles object to the console

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/" className="logo">Eventicket</Link>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search events" />
                <button className="search-btn"><FaSearch /></button>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/search" className="nav-link">Find Events</Link>
                </li>
                <li>
                    <Link to="/create-event" className="nav-link">Create Event</Link>
                </li>
                <li>
                    <Link to="/help-center" className="nav-link">Help Center</Link>
                </li>
                <li>
                    <Link to="/login" className="nav-link">Log In</Link>
                </li>
                <li>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

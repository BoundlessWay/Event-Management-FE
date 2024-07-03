import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import styles from './NavBar.module.scss'; // Import CSS module for NavBar styling
import { useAuth } from '../../hooks/useAuth';

const NavBar = () => {
    const { role, handleLogout } = useAuth();


    return (
        <nav className={styles.navBar}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logo}>Eventicket</Link>
            </div>

            <div className={styles.searchBar}>
                <input type="text" placeholder="Search events" />
                <button><FaSearch /></button>
            </div>

            <ul className={styles.navLinks}>
                <li>
                    <Link to="/search">Find Events</Link>
                </li>
                <li>
                    <Link to="/create-event">Create Event</Link>
                </li>
                <li>
                    <Link to="/help-center">Help Center</Link>
                </li>
                {role === null ? (
                    <React.Fragment>
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </React.Fragment>
                ) : (
                    <li>
                        <button onClick={handleLogout}>Log Out</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;

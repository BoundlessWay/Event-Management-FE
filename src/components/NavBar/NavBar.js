import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import styles from './NavBar.module.scss'; // Import CSS module for NavBar styling
import useAuth from 'hooks/useAuth';
import avatar from 'assets/image/avatar.png';


const NavBar = ({ handleSearch }) => {
    const { username, role, handleLogout } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleLogoutClick = (e) => {
        e.preventDefault();
        handleLogout();
        navigate('/');
    };

    const handleSubmit = (e) => {
        handleSearch(searchTerm);
        navigate('/');
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <nav className={styles.navBar}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logo}>Eventicket</Link>
            </div>

            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search events"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSubmit}><FaSearch /></button>
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
                    <div className={styles.profile}>
                        <div className={styles.avatar}>
                            <p>{username}</p>
                            <img src={avatar} alt="Profile" />
                        </div>

                        <nav className={styles.profileNav}>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/change-password">Change Password</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={handleLogoutClick}>Logout</Link>
                            </li>
                        </nav>
                    </div>

                )}
            </ul>
        </nav>
    );
};

export default NavBar;

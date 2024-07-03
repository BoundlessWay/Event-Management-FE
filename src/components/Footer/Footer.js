import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h4>Discover</h4>
                    <ul>
                        <li><Link to="/">Events</Link></li>
                        <li><Link to="/">Online Events</Link></li>
                        <li><Link to="/">Local Events</Link></li>
                        <li><Link to="/">Festival</Link></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4>About</h4>
                    <ul>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Help Center</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4>Contact</h4>
                    <ul className={styles.socialIcons}>
                        <li><Link to="/"><FaFacebookF />Facebook</Link></li>
                        <li><Link to="/"><FaTwitter />Twitter</Link></li>
                        <li><Link to="/"><FaInstagram />Instagram</Link></li>
                        <li><Link to="/"><FaLinkedinIn />Linkedin</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <p>&copy; 2024 Eventicket. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

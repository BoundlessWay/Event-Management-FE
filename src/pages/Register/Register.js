// src/pages/HomePage/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to Our Ticket Management System</h1>
            </header>
            <main className="homepage-main">
                <p>Your one-stop solution for managing events and tickets.</p>
                <div className="homepage-links">
                    <Link to="/login" className="homepage-link">Login</Link>
                    <Link to="/register" className="homepage-link">Register</Link>
                </div>
            </main>
            <footer className="homepage-footer">
                <p>© 2024 Ticket Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;

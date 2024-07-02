// src/pages/HomePage/HomePage.js
import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.module.css';
import NavBar from "components/NavBar/NavBar"

const HomePage = () => {
    return (
        <div className="homepage-container">
            <NavBar />
        </div>
    );
};

export default HomePage;

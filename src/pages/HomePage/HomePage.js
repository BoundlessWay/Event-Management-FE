
import React from 'react';

import NavBar from "components/NavBar/NavBar"
import EventList from "components/EventList/EventList"
import Footer from "components/Footer/Footer"

import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className={styles.topFixed}>
                <NavBar />
            </div>

            <div className={styles.wallpaper}></div>

            <main className={styles.mainContent}>
                <EventList />

            </main>

            <div className={styles.bottomFooter}>
                <Footer />
            </div>


        </React.Fragment>
    );
};

export default HomePage;

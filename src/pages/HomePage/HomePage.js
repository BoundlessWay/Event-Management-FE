
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "components/NavBar/NavBar"
import EventCard from "components/EventCard/EventCard"
import Footer from "components/Footer/Footer"
import useEvent from 'hooks/useEvent';
import { useAuth } from 'hooks/useAuth';
import styles from './HomePage.module.scss';
import image from "assets/image/event-image.jfif"

const HomePage = () => {

    const { events } = useEvent();
    const { role } = useAuth();
    const navigate = useNavigate();

    const handleEventClick = (e) => {

        if (role === null) {
            navigate('/login'); // Redirect to login if role is null
        } else {
            navigate(`/eventDetail/${e.eventID}`); // Redirect to eventDetail if role is not null
        }
    }



    const fakeImage = image;
    const fakePrice = "From $0.00";
    const fakeOrganization = "AI Society";

    return (
        <React.Fragment>
            <div className={styles.topFixed}>
                <NavBar />
            </div>

            <div className={styles.wallpaper}></div>

            <main className={styles.eventList}>
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        eventIntro={event.eventIntro}
                        startDate={event.startDate}
                        location={event.location}
                        picture={fakeImage}
                        price={fakePrice}
                        organization={fakeOrganization}
                        onClick={() => handleEventClick(event)}
                    />
                ))}

            </main>

            <div className={styles.bottomFooter}>
                <Footer />
            </div>


        </React.Fragment>
    );
};

export default HomePage;

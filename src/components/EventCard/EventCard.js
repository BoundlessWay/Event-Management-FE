import React from 'react';
import styles from './EventCard.module.scss'; // Import CSS module for styling



const EventCard = ({ id, eventIntro, startDate, location, picture, price, organization, onClick }) => {



    return (
        <div className={styles.eventCard} onClick={onClick}>
            <div className={styles.eventImage}>
                <img src={picture} alt={eventIntro} className={styles.eventImage} />
            </div>

            <div className={styles.eventInfo}>
                <h4 className={styles.heading}>{eventIntro}</h4>
                <p className={styles.date}>Date: {startDate}</p>
                <p className={styles.price}>Price: {price}</p>
                <p className={styles.organization}>Organization: {organization}</p>
                <p className={styles.location}>Location: {location}</p>
            </div>
        </div>
    );
};

export default EventCard;

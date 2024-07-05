import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useEvent from 'hooks/useEvent';
import styles from './EventDetail.module.scss';
import image from "assets/image/event-image.jfif";

const EventDetail = () => {
    const { eventId } = useParams();

    const { fetchEventById, event, loading, error } = useEvent();
    const navigate = useNavigate();
    const fakeImage = image;

    useEffect(() => {
        fetchEventById(eventId);
    }, [eventId, fetchEventById]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!event) {
        return <p>No event found</p>;
    }

    const handleGetTicket = () => {
        alert(`Get ticket for event: ${event.eventID}`);
    };

    return (
        <div className={styles.eventDetail}>
            <button onClick={() => navigate(-1)} className={styles.backBtn}>Go Back</button>
            <h1 className={styles.title}>{event.eventIntro}</h1>
            <img src={fakeImage} alt={event.eventIntro} className={styles.eventImage} />
            <p className={styles.description}>Description: {event.eventDescription}</p>
            <p className={styles.info}><strong>Date:</strong> {event.startDate} to {event.endDate}</p>
            <p className={styles.info}><strong>Location:</strong> {event.location}</p>
            <p className={styles.info}><strong>Organizer:</strong> {event.eventOrganizationName}</p>
            <p className={styles.info}><strong>Price:</strong> ${event.eventPrice}</p>
            <button onClick={handleGetTicket} className={styles.ticketBtn}>Get Ticket</button>
        </div>
    );
};

export default EventDetail;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useEvent from 'hooks/useEvent';
import useAuth from 'hooks/useAuth'; // Import useAuth hook
import styles from './CreateEvent.module.scss'; // Import SCSS module
import NavBar from 'components/NavBar/NavBar';

const CreateEventForm = () => {
    const [eventIntro, setEventIntro] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [eventTypeID, setEventTypeID] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventPrice, setEventPrice] = useState(0);
    const { eventTypes, fetchEventTypes, createEvent } = useEvent();
    const { userID } = useAuth(); // Get userID from useAuth hook
    const navigate = useNavigate();

    useEffect(() => {
        fetchEventTypes();
    }, [fetchEventTypes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = {
            eventIntro,
            startDate,
            endDate,
            location,
            eventTypeID,
            eventDescription,
            eventOrganizationID: userID, // Use userID as eventOrganizationID
            eventPrice: parseFloat(eventPrice),
        };
        createEvent(eventData);
    };
    const handleSearch = (searchTerm) => {
        navigate('/');
    }

    return (

        <React.Fragment>
            <NavBar handleSearch={handleSearch} />
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div>
                    <label>Event Intro:</label>
                    <input
                        type="text"
                        value={eventIntro}
                        onChange={(e) => setEventIntro(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Event Type:</label>
                    <select
                        value={eventTypeID}
                        onChange={(e) => setEventTypeID(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select event type</option>
                        {eventTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Event Description:</label>
                    <textarea
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Event Price:</label>
                    <input
                        type="number"
                        value={eventPrice}
                        onChange={(e) => setEventPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Event</button>
            </form>
        </React.Fragment>

    );
};

export default CreateEventForm;

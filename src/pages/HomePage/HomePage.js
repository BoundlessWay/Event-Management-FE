
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "components/NavBar/NavBar"
import EventCard from "components/EventCard/EventCard"
import Footer from "components/Footer/Footer"
import useEvent from 'hooks/useEvent';
import styles from './HomePage.module.scss';
import image from "assets/image/event-image.jfif"


const HomePage = () => {

    const { events, eventTypes, fetchAllEvents, fetchEventTypes } = useEvent();
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedTypeID, setSelectedTypeID] = useState('');
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    const fakeImage = image;

    const handleEventClick = (e) => {
        navigate(`/eventDetail/${e.eventID}`);
    }

    useEffect(() => {
        fetchAllEvents();
        fetchEventTypes();
    }, [fetchAllEvents, fetchEventTypes]);

    useEffect(() => {
        setFilteredEvents(events);
    }, [events]);

    useEffect(() => {
        const handleFilter = () => {


            let filtered = events;

            if (searchText) {
                filtered = filtered.filter(event =>
                    event.eventIntro.toLowerCase().includes(searchText.toLowerCase())
                );
            }

            if (selectedTypeID) {
                filtered = filtered.filter(event =>
                    event.eventTypeID === selectedTypeID
                );
            }

            setFilteredEvents(filtered);
        }
        handleFilter();
    }, [searchText, selectedTypeID, events]);


    const handleSearch = (searchTerm) => {
        setSearchText(searchTerm);
    }

    const handleTypeClick = (eventType) => {
        if (selectedTypeID === eventType.eventTypeID) {
            setSelectedTypeID('');
        } else {
            setSelectedTypeID(eventType.eventTypeID);
        }
    };




    return (
        <React.Fragment>
            <div className={styles.topFixed}>
                <NavBar handleSearch={handleSearch} />
            </div>

            <div className={styles.wallpaper}></div>

            <main className={styles.mainContent}>
                <div className={styles.eventTypeList}>
                    {eventTypes.map((eventType) => (
                        <span
                            key={eventType.eventTypeID}
                            className={eventType.eventTypeID === selectedTypeID ? styles.selected : ""}
                            onClick={() => handleTypeClick(eventType)}
                        >{eventType.eventTypeName.replace(' Events', '')}
                        </span>
                    ))}
                </div>
                <div className={styles.eventList}>
                    {filteredEvents.length === 0 ? (
                        <h4 className={styles.emptyList}>Không có sự kiện nào</h4>
                    ) : (
                        filteredEvents.map((event) => (
                            <EventCard
                                key={event.eventID}
                                eventIntro={event.eventIntro}
                                startDate={event.startDate}
                                location={event.location}
                                picture={fakeImage}
                                price={event.eventPrice}
                                organization={event.eventOrganizationName}
                                onClick={() => handleEventClick(event)}
                            />
                        ))
                    )}
                </div>
            </main>

            <div className={styles.bottomFooter}>
                <Footer />
            </div>


        </React.Fragment>
    );
};

export default HomePage;

import { useState, useEffect } from 'react';
import EventService from 'services/EventService';

const useEvent = () => {
    const [events, setEvents] = useState([]);
    const [eventTypes, setEventTypes] = useState([]);
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAllEvents = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await EventService.getAllEvents();
            setEvents(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllEvents();
    }, []);


    const fetchEventById = async (eventId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await EventService.getEventById(eventId);
            setEvent(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchEventTypes = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await EventService.getEventTypes();
            setEventTypes(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createEvent = async (eventData) => {
        setLoading(true);
        setError(null);
        try {
            const data = await EventService.createEvent(eventData);
            setEvents((prevEvents) => [...prevEvents, data]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        events,
        eventTypes,
        event,
        loading,
        error,
        fetchAllEvents,
        fetchEventById,
        fetchEventTypes,
        createEvent,
    };
};

export default useEvent;


// const BASE_URL = 'https://gateway-service-7kqp.onrender.com/event';
const BASE_URL = 'https://event-service-7nx8.onrender.com';

const EventService = {
    getAllEvents: async () => {
        try {
            const response = await fetch(`${BASE_URL}/events`);
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching all events:', error);
            throw error;
        }
    },

    getEventById: async (eventId) => {
        try {
            const response = await fetch(`${BASE_URL}/events/${eventId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch event details');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching event with ID ${eventId}:`, error);
            throw error;
        }
    },

    getEventTypes: async () => {
        try {
            const response = await fetch(`${BASE_URL}/event-types`);
            if (!response.ok) {
                throw new Error('Failed to fetch event types');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching event types:', error);
            throw error;
        }
    },

    createEvent: async (eventData) => {
        try {
            const response = await fetch(`${BASE_URL}/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            });
            if (!response.ok) {
                throw new Error('Failed to create event');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating event:', error);
            throw error;
        }
    }
};

export default EventService;



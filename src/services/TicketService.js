// TicketService.js

const BASE_URL = 'https://gateway-service-7kqp.onrender.com/ticket';

const TicketService = {
    getTotalRevenue: async (startDate, endDate, eventID) => {
        try {
            const params = new URLSearchParams();
            if (startDate) params.append('start_date', startDate);
            if (endDate) params.append('end_date', endDate);
            if (eventID) params.append('eventID', eventID);

            const response = await fetch(`${BASE_URL}/api/revenue?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch revenue');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching revenue:', error);
            throw error;
        }
    },

    getTotalTicketsSold: async (startDate, endDate, eventID) => {
        try {
            const params = new URLSearchParams();
            if (startDate) params.append('start_date', startDate);
            if (endDate) params.append('end_date', endDate);
            if (eventID) params.append('eventID', eventID);

            const response = await fetch(`${BASE_URL}/api/tickets-sold?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch tickets sold');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching tickets sold:', error);
            throw error;
        }
    },

    getAllTickets: async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/tickets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch tickets');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error;
        }
    },

    createTicket: async (ticketData) => {
        try {
            const response = await fetch(`${BASE_URL}/api/tickets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData),
            });
            if (!response.ok) {
                throw new Error('Failed to create ticket');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw error;
        }
    },

    getTicketsForEvent: async (eventID) => {
        try {
            const response = await fetch(`${BASE_URL}/api/tickets/${eventID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch tickets for event');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching tickets for event:', error);
            throw error;
        }
    },

    updateTicket: async (ticketID, ticketData) => {
        try {
            const response = await fetch(`${BASE_URL}/api/tickets/${ticketID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData),
            });
            if (!response.ok) {
                throw new Error('Failed to update ticket');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating ticket:', error);
            throw error;
        }
    },

    deleteTicket: async (ticketID) => {
        try {
            const response = await fetch(`${BASE_URL}/api/tickets/${ticketID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete ticket');
            }
            return true;
        } catch (error) {
            console.error('Error deleting ticket:', error);
            throw error;
        }
    },

    purchaseTicket: async (ticketData) => {
        try {
            const response = await fetch(`${BASE_URL}/api/tickets/purchase`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData),
            });
            if (!response.ok) {
                throw new Error('Failed to purchase ticket');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error purchasing ticket:', error);
            throw error;
        }
    },

    cancelTicket: async (ticketID) => {
        try {
            const response = await fetch(`${BASE_URL}/api/tickets/${ticketID}/cancel`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to cancel ticket');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error canceling ticket:', error);
            throw error;
        }
    },
};

export default TicketService;

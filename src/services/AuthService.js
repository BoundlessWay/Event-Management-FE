// src/services/authService.js
// const BASE_URL = 'https://gateway-service-7kqp.onrender.com/auth';

const AuthService = {
    login: async (username, password) => {
        // try {
        //     const response = await fetch(`${BASE_URL}/login`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ username, password }),
        //     });
        //     if (!response.ok) {
        //         throw new Error('Failed to login');
        //     }
        //     const data = await response.json();
        //     return data;
        // } catch (error) {
        //     console.error('Error logging in:', error);
        //     throw error;
        // }
        if (username === "guest") return { id: '1', role: 'guest' };
        else if (username === "admin") return { id: '1', role: 'admin' };
        else if (username === "organization") return { id: '1', role: 'organization' };
        else return { id: '1', role: 'guest' };

    },

    registerGuest: async (userData) => {
        // try {
        //     const response = await fetch(`${BASE_URL}/register/guest`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(userData),
        //     });
        //     if (!response.ok) {
        //         throw new Error('Failed to register guest');
        //     }
        //     const data = await response.json();
        //     return data;
        // } catch (error) {
        //     console.error('Error registering guest:', error);
        //     throw error;
        // }
        return {
            "message": "Guest registered successfully",
        }
    },

    registerOrganization: async (userData) => {
        // try {
        //     const response = await fetch(`${BASE_URL}/register/organization`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(userData),
        //     });
        //     if (!response.ok) {
        //         throw new Error('Failed to register organization');
        //     }
        //     const data = await response.json();
        //     return data;
        // } catch (error) {
        //     console.error('Error registering organization:', error);
        //     throw error;
        // }
        return {
            "message": "Organization registered successfully",
        }
    },

    getAllUsers: async (username, password) => {
        // try {
        //     const response = await fetch(`${BASE_URL}/users`, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ username, password }),
        //     });
        //     if (!response.ok) {
        //         throw new Error('Failed to fetch users');
        //     }
        //     const data = await response.json();
        //     return data;
        // } catch (error) {
        //     console.error('Error fetching users:', error);
        //     throw error;
        // }
        return [
            { id: '1', username: 'user1', role: 'guest' },
            { id: '2', username: 'user2', role: 'organization' },
            { id: '3', username: 'user3', role: 'admin' },
        ];
    }
};

export default AuthService;

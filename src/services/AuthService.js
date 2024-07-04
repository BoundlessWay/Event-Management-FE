// src/services/authService.js
const BASE_URL = 'https://gateway-service-7kqp.onrender.com/auth';

/**
 * Function to handle user login.
 * @param {string} username - Username of the user.
 * @param {string} password - Password of the user.
 * @returns {Object} - Response data from the server.
 */
export const login = async (username, password) => {
    // const response = await fetch(`${BASE_URL}/login`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    // });

    // if (!response.ok) {
    //     const errorData = await response.json();
    //     throw new Error(errorData.error);
    // }

    // return await response.json();
    return { id: '1', role: 'guest' };
};

/**
 * Function to register a new guest user.
 * @param {Object} userData - User data for the guest.
 * @returns {Object} - Response data from the server.
 */
export const registerGuest = async (userData) => {
    const response = await fetch(`${BASE_URL}/register/guest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
    }

    return await response.json();
};

/**
 * Function to register a new organization user.
 * @param {Object} userData - User data for the organization.
 * @returns {Object} - Response data from the server.
 */
export const registerOrganization = async (userData) => {
    const response = await fetch(`${BASE_URL}/register/organization`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
    }

    return await response.json();
};

// AuthContext.js
import React, { createContext, useState } from 'react';
import { login, registerGuest, registerOrganization } from 'services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async (username, password) => {
        try {
            const data = await login(username, password);
            setRole(data.role);
            setIsLoggedIn(true);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRole(null);
    };

    const handleRegisterGuest = async (userData) => {
        try {
            await registerGuest(userData);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const handleRegisterOrganization = async (userData) => {
        try {
            await registerOrganization(userData);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return (
        <AuthContext.Provider value={
            { isLoggedIn, role, error, handleLogin, handleLogout, handleRegisterGuest, handleRegisterOrganization }
        }>
            {children}
        </AuthContext.Provider>
    );
};


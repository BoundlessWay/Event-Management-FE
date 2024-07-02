// AuthContext.js
import React, { createContext, useState } from 'react';
import { login as authLogin, registerGuest, registerOrganization } from 'services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [error, setError] = useState(null);

    const login = async (username, password) => {
        try {
            const data = await authLogin(username, password);
            setRole(data.role);
            setIsLoggedIn(true);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const logout = () => {
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

    const changeAuthState = (loggedIn, userRole) => {
        setIsLoggedIn(loggedIn);
        setRole(userRole);
    };

    return (
        <AuthContext.Provider value={
            { isLoggedIn, role, login, logout, handleRegisterGuest, handleRegisterOrganization, error, changeAuthState }
        }>
            {children}
        </AuthContext.Provider>
    );
};


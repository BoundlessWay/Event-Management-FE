// AuthContext.js
import React, { createContext, useState } from 'react';
import AuthService from 'services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [userID, setUserID] = useState(null);
    const [username, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async (username, password) => {
        try {
            const data = await AuthService.login(username, password);
            setRole(data.role);
            setUser(username);
            setPassword(password);
            setUserID(data.id);
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
        setUser(null);
        setUserID(null);
        setError(null);
        setPassword(null);
    };

    const handleRegisterGuest = async (userData) => {
        try {
            await AuthService.registerGuest(userData);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const handleRegisterOrganization = async (userData) => {
        try {
            await AuthService.registerOrganization(userData);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return (
        <AuthContext.Provider value={
            { isLoggedIn, role, error, username, password, userID, handleLogin, handleLogout, handleRegisterGuest, handleRegisterOrganization }
        }>
            {children}
        </AuthContext.Provider>
    );
};


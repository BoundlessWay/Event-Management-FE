import React, { useState } from 'react';
import styles from './Organization.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const OrganizationForm = () => {

    const { handleRegisterOrganization, error } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        companyName: '',
        companyAddress: '',
        companyContact: '',
        role: 'organization'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegisterOrganization(formData);
        if (error) alert(error);
        else {
            alert('Registration successful! Please log in.');
            navigate('/login');
            console.log(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="companyName">Company Name</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="companyAddress">Company Address</label>
                <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="companyContact">Company Contact</label>
                <input
                    type="tel"
                    id="companyContact"
                    name="companyContact"
                    value={formData.companyContact}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Sign Up as Organization</button>
        </form>
    );
};

export default OrganizationForm;

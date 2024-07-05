import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.notFound}>
            <h1>Access Denied</h1>
            <p>You do not have permission to access this page.</p>
            <div className={styles.buttons}>
                <button onClick={() => navigate(-1)} className={styles.button}>Go Back</button>
                <button onClick={() => navigate('/login')} className={styles.button}>Login</button>
            </div>
        </div>
    );
};

export default NotFound;

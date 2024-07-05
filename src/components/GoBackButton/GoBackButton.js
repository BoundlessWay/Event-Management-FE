import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GoBackButton.module.scss';

const GoBackButton = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className={styles.backBtn}>Go Back</button>
    );
};

export default GoBackButton;

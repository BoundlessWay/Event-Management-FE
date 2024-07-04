import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, error } = useAuth();
    const navigate = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(username, password);
        if (!error) {
            alert('Login successful');
            navigate('/');
        }
        else alert(error)
    };

    function ShowPass() {

        const checkbox = document.querySelector(`.${styles.loginForm} form input[type="checkbox"]`);
        const passwordInput = document.querySelector(`.${styles.loginForm} form input:nth-child(2)`);

        if (checkbox.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }

    return (
        <div className={styles.loginForm}>
            <h2 className={styles.heading}>Login</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input
                    id="showPass"
                    type="checkbox"
                    onClick={ShowPass}
                />
                <p>Show password</p>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;

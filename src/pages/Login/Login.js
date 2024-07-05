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

    const handleSignUp = () => {
        navigate('/signup');
    }

    function ShowPass() {

        const checkbox = document.getElementById('showPass');
        const passwordInput = document.getElementById('password');

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
                <div className={styles.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.checkboxGroup}>
                    <input
                        type="checkbox"
                        id="showPass"
                        onClick={ShowPass}
                    />
                    <label htmlFor="showPass">Show password</label>
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account ?</p>
            <button onClick={handleSignUp} className={styles.signUpBtn}>Sign Up</button>
        </div>
    );
};

export default Login;

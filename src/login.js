import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import CSS file for styling

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.data.role) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('userRole', response.data.role);
                navigate('/CompetitionSelection');
            }
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <h3>Username</h3>
                <input

                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <h3>Password</h3>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default Login;

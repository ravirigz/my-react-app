import { useState } from 'react'
import './Converter.css'

import { loginFormLogic } from './Login.js';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginClick = async () => {
        setMessage("Logging in...");
        
        const loginData = await loginFormLogic(username, password);
        
        if (loginData.success) {
            setMessage("You have successfully logged in!");
            onLoginSuccess(); 
        } else {
            setMessage("Incorrect Credentials.");
        }
    };

    return (
        <div className="main-container">
            <div className="converter login-form">
                <label className="label">Username:</label>
                <input className="input login-form" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                
                <label className="label">Password:</label>
                <input className="input login-form" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                
                <button className="button" onClick={handleLoginClick} id="buttonLogin">Login</button>
                
                <p className="textDOM" id="textLogin">{message}</p>
            </div>
        </div>
    );
}

export default Login;
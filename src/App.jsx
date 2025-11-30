import React, { useState } from 'react';
import Converter from './Converter.jsx';
import Login from './Login.jsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    if (!isLoggedIn) {
        return <Login onLoginSuccess={handleLoginSuccess} />;
    }

    return <Converter />;
}

export default App;
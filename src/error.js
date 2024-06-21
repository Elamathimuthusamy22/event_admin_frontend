import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

import './error.css'; // Import CSS for styling

const Error = ({ message }) => {
    return (
        <div className="container">
            <h1>Error</h1>

            <Link to="/competition_selection" className="btn">Go back to Competition Selection</Link>
        </div>
    );
};

export default Error;

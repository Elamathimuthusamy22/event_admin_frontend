import React, { useEffect, useState } from 'react';
import './winner1.css'; // Import the CSS file

const Winner1 = () => {
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/winner1')
            .then(response => response.json())
            .then(data => {
                setWinners(data.winners);
            })
            .catch(error => console.error('Error fetching winners:', error));
    }, []);

    return (
        <div className='containers'>
            <h1>Competition Winners</h1>
            <ul>
                {winners.map(winner => (
                    <li key={winner.user_id}>
                        <span className="user-id">User ID: {winner.user_id}</span><br />
                        <span className="average-marks">Points: {winner.average_marks}</span><br />
                        <span className="name">Name: {winner.username}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Winner1;

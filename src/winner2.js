import React, { useEffect, useState } from 'react';

const Winner2 = () => {
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/winner2')
            .then(response => response.json())
            .then(data => {
                setWinners(data.winners);
            })
            .catch(error => console.error('Error fetching winners:', error));
    }, []);

    return (
        <div>
            <h1>Competition Winners</h1>
            <ul>
                {winners.map(winner => (
                    <li key={winner.user_id}>
                        User ID: {winner.user_id}<br />
                        Points: {winner.average_marks}<br />
                        Name: {winner.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Winner2;

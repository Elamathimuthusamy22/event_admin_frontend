// src/Participants1.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './participants1.css'; // Assume you have a CSS file for styling

const Participants1 = () => {
    const [participants, setParticipants] = useState([]);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/participants1')
            .then(response => {
                const participantsData = response.data.participants.map(participant => ({
                    ...participant,
                    round1_marks: '',
                    round2_marks: ''
                }));
                setParticipants(participantsData);
            })
            .catch(error => {
                setError('An error occurred while fetching participants.');
                console.error(error); // Log the error for debugging
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/participants1', formData)
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                setError('An error occurred while updating marks.');
                console.error(error); // Log the error for debugging
            });
    };

    return (
        <div className="container">
            <h1>Competition 1</h1>
            <h2>Participants:</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Round 1 Marks</th>
                            <th>Round 2 Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map((participant, index) => (
                            <tr key={index}>
                                <td>{participant.user_id}</td>
                                <td>{participant.username}</td>
                                <td>
                                    <input
                                        type="number"
                                        name={`round1_${participant.user_id}`}
                                        value={formData[`round1_${participant.user_id}`] || ''}
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name={`round2_${participant.user_id}`}
                                        value={formData[`round2_${participant.user_id}`] || ''}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <input style={{ marginLeft: '45%' }} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Participants1;

// src/Competition1.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './competition1.css';

const Competition1 = () => {
    const [participants, setParticipants] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch participants data from the backend
        axios.get('http://localhost:5000/competition1')
            .then(response => {
                setParticipants(response.data.participants);
                const initialAttendance = response.data.participants.reduce((acc, participant) => {
                    acc[participant.user_id] = participant.attendance;
                    return acc;
                }, {});
                setAttendance(initialAttendance);
            })
            .catch(error => {
                setError('An error occurred while fetching participants.');
            });
    }, []);

    const handleAttendanceChange = (userId) => {
        setAttendance({
            ...attendance,
            [userId]: !attendance[userId]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const attendanceData = participants.reduce((acc, participant) => {
            acc[`attendance_${participant.user_id}`] = attendance[participant.user_id];
            return acc;
        }, {});

        axios.post('http://localhost:5000/competition1', attendanceData)
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                setError('An error occurred while updating attendance.');
            });
    };

    return (
        <div className="container">
            {/* <h1 className="h1-custom">Competition 1</h1> */}
            <h2 className="h2-custom">Participants:</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map(participant => (
                            <tr key={participant.user_id}>
                                <td>{participant.user_id}</td>
                                <td>{participant.username}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={attendance[participant.user_id] || false}
                                        onChange={() => handleAttendanceChange(participant.user_id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <input style={{ marginLeft: '45%' }} type="submit" value="Submit" />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Competition1;

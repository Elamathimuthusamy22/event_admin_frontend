import React from 'react';
import './CompetitionSelection.css'; // Import CSS file for styling

const CompetitionSelection = () => {
    return (
        <div className="competition-selection">
            <h1>Competitions</h1>
            <div className="container">

                <div className="box">
                    <h2>Competition 1</h2>
                    <a href="/competition1">View Details</a>
                </div>
                <div className="box">
                    <h2>Competition 2</h2>
                    <a href="/competition2">View Details</a>
                </div>
                <div className="box">
                    <h2>Participants 1</h2>
                    <a href="/participants1">View Details</a>
                </div>
                <div className="box">
                    <h2>Participants 2</h2>
                    <a href="/participants2">View Details</a>
                </div>
                <div className="box">
                    <h2>Winner 1</h2>
                    <a href="/winner1">View Details</a>
                </div>
                <div className="box">
                    <h2>Winner 2</h2>
                    <a href="/winner2">View Details</a>
                </div>
                {/* Add more boxes for other competitions */}
            </div>
        </div>
    );
};

export default CompetitionSelection;

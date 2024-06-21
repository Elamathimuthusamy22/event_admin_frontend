import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <style>
                {`
                    /* CSS Reset */
                    body, html {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                    }

                    .navbar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px;
                        background-color: #333;
                        color: #fff;
                        position: fixed;
                        top: 0;
                        width: 100%;
                        z-index: 1000;
                    }

                    .logo {
                        font-size: 24px;
                        font-weight: bold;
                    }

                    .menu {
                        margin-right: 20px; /* Add margin to the right to prevent going to the edge */
                    }

                    .menu a {
                        color: #fff;
                        text-decoration: none;
                        margin-left: 20px;
                        font-size: 18px;
                    }

                    .hero {
                        text-align: center;
                        padding: 120px 20px 20px; /* Adjusted padding to account for fixed navbar */
                        background-color: #f4f4f4;
                    }

                    .hero h1 {
                        font-size: 48px;
                        margin-bottom: 20px;
                    }

                    .hero .description {
                        font-size: 20px;
                        margin-bottom: 40px;
                    }

                    .cta-buttons .button {
                        display: inline-block;
                        padding: 10px 20px;
                        font-size: 18px;
                        background-color: #007bff;
                        color: #fff;
                        text-decoration: none;
                        border-radius: 5px;
                        transition: background-color 0.3s;
                    }

                    .cta-buttons .button:hover {
                        background-color: #0056b3;
                    }

                    .cta-buttons .arrow {
                        margin-left: 10px;
                        transition: margin-left 0.3s;
                    }

                    .cta-buttons .button:hover .arrow {
                        margin-left: 15px;
                    }
                `}
            </style>
            <nav className="navbar">
                <div className="logo">EventX</div>
                <div className="menu">
                    <Link to="/login">Login</Link>
                </div>
            </nav>

            <div className="hero">
                <h1>Welcome to PSG's Event Management Portal!!</h1>
                <p className="description">
                    Discover the excitement of college events at PSG. Our event management portal provides a comprehensive guide to all the upcoming events organized by various departments. Whether you're a student, faculty member, or guest, you'll find everything you need to know right here.
                </p>
                <div className="cta-buttons">
                    <Link to="/login" className="button">Login <span className="arrow">&rarr;</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

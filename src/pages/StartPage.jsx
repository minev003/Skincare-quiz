import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StartPage.css';
import bathImage from '../assets/background.jpg';

function StartPage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/question/1');
    };

    return (
        <div className="start-page-wrapper" style={{ backgroundImage: `url(${bathImage})` }}>
            <div className="start-content-box">
                <h1 className="start-heading">Build a self care routine suitable for you</h1>
                <p className="start-subheading">Take out test to get a personalised self care routine based on your needs.</p>
                <button className="start-button" onClick={handleStart}>Start the quiz</button>
            </div>
        </div>
    );
}

export default StartPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';
import '../styles/ResultsPage.css';
import resultImage from '../assets/resultImage.jpg';

function ResultsPage() {
    const navigate = useNavigate();

    const handleRetakeQuiz = () => {
        navigate('/');
    };

    const userQuizResults = ["moisturizing", "hydrating"];

    return (
        <div className="results-page-container">
            <div className="results-hero" style={{ backgroundImage: `url(${resultImage})` }}>
                <h1 className="results-title">Build your everyday self care routine.</h1>
                <p className="results-description">
                    Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
                </p>
                <button className="retake-quiz-button" onClick={handleRetakeQuiz}>
                    Retake the quiz
                </button>
            </div>

            <div className="products-section">
                <div className="products-container">
                    <div className="product-card daily-routine-card" style={{ backgroundColor: '#EEF7FB' }}>
                        <h2 className="card-title">Daily routine</h2>
                        <p className="card-description">
                            Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
                        </p>
                    </div>
                    <ProductSlider userInputs={userQuizResults} />
                </div>
            </div>
        </div>
    );
}

export default ResultsPage;
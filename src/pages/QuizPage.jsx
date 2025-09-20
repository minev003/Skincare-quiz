import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/questions';
import '../styles/QuizePage.css';

function QuizPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const question = quizQuestions.find(q => q.id === parseInt(id));
        if (question) {
            setCurrentQuestion(question);
        } else {
            navigate('/');
        }
        window.scrollTo(0, 0);
    }, [id, navigate]);

    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    const totalQuestions = quizQuestions.length;
    const questionNumber = currentQuestion.id;
    const progressPercentage = (questionNumber / totalQuestions) * 100;

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (questionNumber < totalQuestions) {
            navigate(`/question/${questionNumber + 1}`);
            setSelectedOption(null);
        } else {
            navigate('/results');
        }
    };

    const handleBack = () => {
        if (questionNumber > 1) {
            navigate(`/question/${questionNumber - 1}`);
            setSelectedOption(null);
        }
    };

    const getOptionLetter = (index) => {
        return String.fromCharCode(97 + index);
    };

    return (
        <div className="quiz-container">
            <div className="progress-bar-container">
                <svg className="progress-ring" width="100" height="100">
                    <circle
                        className="progress-ring-background"
                        stroke="#eee"
                        strokeWidth="8"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="progress-ring-circle"
                        stroke="#79a5b3"
                        strokeWidth="8"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        style={{ strokeDasharray: 2 * Math.PI * 45, strokeDashoffset: 2 * Math.PI * 45 * (1 - progressPercentage / 100) }}
                    />
                </svg>
                <div className="progress-text">
                    {questionNumber}/{totalQuestions}
                </div>
            </div>

            <h1 className="question-text">{currentQuestion.questionText}</h1>

            <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        <span className="option-letter">{getOptionLetter(index)}.</span>
                        <span className="option-text">{option}</span>
                    </button>
                ))}
            </div>

            <div className="navigation-buttons">
                {questionNumber > 1 && (
                    <button className="back-button" onClick={handleBack}>
                        Back
                    </button>
                )}
                <button
                    className="next-button"
                    onClick={handleNextQuestion}
                    disabled={!selectedOption}
                >
                    Next question →
                </button>
            </div>
        </div>
    );
}

export default QuizPage;
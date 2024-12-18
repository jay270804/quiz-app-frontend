import React, { useState, useEffect } from 'react';
import api from "../services/api"
import { useNavigate } from 'react-router-dom';

const RandomQuestion = () => {
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [retryQuestion, setRetryQuestion] = useState(false)
    const sessionId = localStorage.getItem('session_id');
    const navigate = useNavigate();

    useEffect(() => {
        if(!retryQuestion){
            fetchRandomQuestion();
        }
    }, []);

    const fetchRandomQuestion = () => {
        api.get('question/random/', { params: { session_id: sessionId } })
        .then((res) => {
                setQuestion(res.data.question);
                setFeedback(null);
            })
            .catch((err) => alert(`Error fetching question: ${err.response.data.error}`));
    };

    const handleSubmit = () => {
        api.post('answer/', { session_id: sessionId, question_id: question.question_id, answer })
            .then((res) => {
                const { result, score } = res.data;
                setFeedback({ result, score });
                if (score === 1){
                    setQuestion(null);
                }
            })
            .catch((err) => alert(`Error submitting answer: ${err.response.data.error}`));
    };

    const handleRetry = () => {
        setFeedback(null)
        setRetryQuestion(true)
    }
    const handleSessionStats = () => {
        navigate('/session-stats');
    };

    return (
        <div>
            {feedback ? (
                <div>
                    <h3>
                        {feedback.result === 'Correct'
                            ? 'Your answer is correct!'
                            : 'Your answer is incorrect. Try again!'}
                    </h3>
                    {feedback.result === 'Correct' ? (
                        <div>
                            <button onClick={fetchRandomQuestion}>Get Another Question</button>
                            <button onClick={handleSessionStats}>View Session Stats</button>
                        </div>
                    ) : (
                        <button onClick={handleRetry}>Try Again</button>
                    )}
                </div>
            ) : question ? (
                <div>
                    <h2>{question.question_text}</h2>
                    {Object.entries(question.options).map(([key, value]) => (
                        <button key={key} onClick={() => setAnswer(key)}>
                            {key}. {value}
                        </button>
                    ))}
                    <br />
                    <button onClick={handleSubmit}>Submit Answer</button>
                </div>
            ) : (
                <p>Loading Question...</p>
            )}
        </div>
    );
};

export default RandomQuestion;

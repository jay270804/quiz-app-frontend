// import React, {useEffect, useState} from "react"
// import api from "../services/api";
// import { useNavigate } from "react-router-dom"

// const HomePage = () =>{
//     const[sessionId, setSessionId] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!localStorage.getItem('session_id')){
//             api.post('quiz/')
//             .then((res)=>{
//                 setSessionId(res.data.session_id);
//                 localStorage.setItem('session_id', res.data.session_id)
//             })
//             .catch((err)=> alert(`Error starting quiz session: ${err.response.data.error}`))
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Welcome to the Quiz App</h1>
//             <p>Starting your quiz session...</p>
//             <button onClick={()=> navigate('/random-question')}>Start Quiz</button>
//             <button onClick={()=> navigate('/session-stats')}>See your stats</button>
//         </div>
//     );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [sessionId, setSessionId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('session_id')) {
            api.post('quiz/')
                .then((res) => {
                    setSessionId(res.data.session_id);
                    localStorage.setItem('session_id', res.data.session_id);
                })
                .catch((err) =>
                    alert(`Error starting quiz session: ${err.response?.data?.error || 'Something went wrong'}`)
                );
        }
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
            }}
        >
            <h1 style={{ fontSize: '2.5rem', color: '#007BFF', marginBottom: '1rem' }}>
                Welcome to the Quiz App
            </h1>
            <h1 style={{ fontSize: '1.75rem', color: '#007BFF', marginBottom: '1rem' }}>
                 by Jay
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '2rem' }}>
                Your quiz session is prepared...
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                    onClick={() => navigate('/random-question')}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        color: '#fff',
                        backgroundColor: '#28a745',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: '0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
                >
                    Start Quiz
                </button>
                <button
                    onClick={() => navigate('/session-stats')}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        color: '#fff',
                        backgroundColor: '#17a2b8',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: '0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#138496')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#17a2b8')}
                >
                    See Your Stats
                </button>
            </div>
        </div>
    );
};

export default HomePage;

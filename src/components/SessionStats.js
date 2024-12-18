// import React, { useEffect, useState } from 'react';
// import api from '../services/api';
// import { useNavigate } from 'react-router-dom';

// const SessionStats = () => {
//   const [stats, setStats] = useState(null);
//   const sessionId = localStorage.getItem('session_id');
//   const navigate = useNavigate()

//   useEffect(() => {
//     api.get('quiz/', {params : {session_id : sessionId}})
//       .then((res) => setStats(res.data.stats))
//       .catch((err) => alert(`Error fetching stats: ${err.response.data.error}`));
//   }, [sessionId]);

//   return (
//     <div>
//       <h1>Session Stats</h1>
//       {stats ? (
//         <ul>
//           <li>Total Questions: {stats.total_questions}</li>
//           <li>Correct Answers: {stats.correct_questions}</li>
//           <li>Incorrect Answers: {stats.incorrect_questions}</li>
//         </ul>
//       ) : (
//         <p>Loading stats...</p>
//       )}
//       <button onClick={()=> navigate('/')}>Back to Home</button>
//     </div>
//   );
// };

// export default SessionStats;
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const SessionStats = () => {
    const [stats, setStats] = useState(null);
    const sessionId = localStorage.getItem('session_id');
    const navigate = useNavigate();

    useEffect(() => {
        api.get('quiz/', { params: { session_id: sessionId } })
            .then((res) => setStats(res.data.stats))
            .catch((err) => alert(`Error fetching stats: ${err.response?.data?.error || 'Something went wrong'}`));
    }, [sessionId]);

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
            <h1 style={{ fontSize: '2.5rem', color: '#343a40', marginBottom: '1rem' }}>Session Stats</h1>
            {stats ? (
                <div
                    style={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'left',
                        width: '300px',
                    }}
                >
                    <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem', color: '#495057' }}>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Total Questions:</strong> {stats.total_questions}
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Correct Answers:</strong> {stats.correct_questions}
                        </li>
                        <li>
                            <strong>Incorrect Answers:</strong> {stats.incorrect_questions}
                        </li>
                    </ul>
                </div>
            ) : (
                <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>Loading stats...</p>
            )}
            <button
                onClick={() => navigate('/')}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: '0.3s',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
                Back to Home
            </button>
        </div>
    );
};

export default SessionStats;

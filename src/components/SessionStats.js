import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const SessionStats = () => {
  const [stats, setStats] = useState(null);
  const sessionId = localStorage.getItem('session_id');
  const navigate = useNavigate()

  useEffect(() => {
    api.get('quiz/', {params : {session_id : sessionId}})
      .then((res) => setStats(res.data.stats))
      .catch((err) => alert(`Error fetching stats: ${err.response.data.error}`));
  }, [sessionId]);

  return (
    <div>
      <h1>Session Stats</h1>
      {stats ? (
        <ul>
          <li>Total Questions: {stats.total_questions}</li>
          <li>Correct Answers: {stats.correct_questions}</li>
          <li>Incorrect Answers: {stats.incorrect_questions}</li>
        </ul>
      ) : (
        <p>Loading stats...</p>
      )}
      <button onClick={()=> navigate('/')}>Back to Home</button>
    </div>
  );
};

export default SessionStats;

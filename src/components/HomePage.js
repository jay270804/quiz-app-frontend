import React, {useEffect, useState} from "react"
import api from "../services/api";
import { useNavigate } from "react-router-dom"

const HomePage = () =>{
    const[sessionId, setSessionId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('session_id')){
            api.post('quiz/')
            .then((res)=>{
                setSessionId(res.data.session_id);
                localStorage.setItem('session_id', res.data.session_id)
            })
            .catch((err)=> alert(`Error starting quiz session: ${err.response.data.error}`))
        }
    }, []);

    return (
        <div>
            <h1>Welcome to the Quiz App</h1>
            <p>Starting your quiz session...</p>
            <button onClick={()=> navigate('/random-question')}>Start Quiz</button>
            <button onClick={()=> navigate('/session-stats')}>See your stats</button>
        </div>
    );
};

export default HomePage;
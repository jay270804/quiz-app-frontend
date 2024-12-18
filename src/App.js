import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RandomQuestion from './components/RandomQuestion';
import SessionStats from './components/SessionStats';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/random-question' element={<RandomQuestion/>} />
        <Route path='/session-stats' element={<SessionStats/>} />
      </Routes>
    </Router>
  );
}

export default App;

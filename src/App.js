import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RandomQuestion from "./components/RandomQuestion";
import SessionStats from "./components/SessionStats";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Router>
    <Header/>
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-question" element={<RandomQuestion />} />
        <Route path="/session-stats" element={<SessionStats />} />
      </Routes>
    </div>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;

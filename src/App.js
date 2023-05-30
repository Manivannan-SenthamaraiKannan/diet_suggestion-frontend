import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Quiz from './Components/Quiz';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='quiz' element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

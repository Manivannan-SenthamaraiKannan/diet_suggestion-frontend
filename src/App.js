import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Quiz from './Components/Quiz';
import Features from './Components/Features';
import FoodPlan from './Components/Receipe/FoodPlan';
import Recipe from './Pages/Recipe';
import {useAuth0} from "@auth0/auth0-react";

function App() {
    const {isAuthenticated} = useAuth0();

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Dashboard/>}/>
                    <Route path='/quiz' element={<Quiz/>}/>
                    {isAuthenticated ? (<Route path='/features' element={<Features/>}/>) : ""}
                    {isAuthenticated ? (<Route path='/receipe' element={<Recipe/>}/>) : ""}
                    {isAuthenticated ? (<Route path='/foodplan' element={<FoodPlan/>}/>) : ""}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

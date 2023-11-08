import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Quiz from './Components/Quiz';
import Features from './Components/Features';
import Recipe from './Pages/Recipe';
import {useAuth0} from "@auth0/auth0-react";
import Obese from "./Components/DietPlan/Obese";
import Normal from "./Components/DietPlan/Normal";
import SevereThinness from "./Components/DietPlan/SevereThinness";
import {useState} from "react";
import Keto from "./Components/Recipe/Keto"
import Carbohydrate from "./Components/Recipe/Carbohydrate";
import PlantBased from "./Components/Recipe/PlantBased";
import Vegan from "./Components/Recipe/Vegan";
import Zone from "./Components/Recipe/Zone";
import Diabetic from "./Components/Recipe/Diabetic";
import Dukan from "./Components/Recipe/Dukan"
import Alkaline from "./Components/Recipe/Alkaline";
import Atkins from "./Components/Recipe/Atkins";
import Carnivore from "./Components/Recipe/Carnivore";
import DietTogo from "./Components/Recipe/dietTogo";
import Flexitarian from "./Components/Recipe/Flexitarian";
import GlutenFree from "./Components/Recipe/glutenFree";
import lowCalories from "./Components/Recipe/lowCalories";
import LowFat from "./Components/Recipe/lowFat";
import Macrobiotic from "./Components/Recipe/Macrobiotic";
import Mediterranean from "./Components/Recipe/Mediterranean";
import NutriSystem from "./Components/Recipe/NutriSystem";
import Paleolithic from "./Components/Recipe/Paleolithic";
import Pescetarianism from "./Components/Recipe/Pescetarianism";
import RawFood from "./Components/Recipe/rawFood";
import SlimFast from "./Components/Recipe/SlimFast";
import SouthBeach from "./Components/Recipe/SouthBeach";
import Vegetarianism from "./Components/Recipe/Vegetarianism";
import WeightWatchers from "./Components/Recipe/WeightWatchers";
import Whole30 from "./Components/Recipe/Whole30";

function App() {
    const {isAuthenticated} = useAuth0();
    const [dietPlan, setDietPlan] = useState("")

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Dashboard/>}/>
                    <Route path='/quiz' element={<Quiz/>}/>
                    {isAuthenticated ? (<Route path='/features' element={<Features/>}/>) : ""}
                    {isAuthenticated ? (<Route path='/receipe' element={<Recipe/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/severethinness' element={<SevereThinness setDiet={setDietPlan}/>}/>) : ""}
                    {isAuthenticated ? (<Route path='/normal' element={<Normal setDiet={setDietPlan}/>}/>) : ""}
                    {isAuthenticated ? (<Route path='/obese' element={<Obese setDiet={setDietPlan}/>}/>) : ""}

                    {isAuthenticated ? (
                        <Route path='/alkaline' element={<Alkaline dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/atkins' element={<Atkins dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/carbohydrate' element={<Carbohydrate dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/carnivore' element={<Carnivore dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/diabetic' element={<Diabetic dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/diettogo' element={<DietTogo dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/dukan' element={<Dukan dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/flexitarian' element={<Flexitarian dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/gluten' element={<GlutenFree dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/keto' element={<Keto dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/lowcalorie' element={<lowCalories dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/lowfat' element={<LowFat dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/macrobiotic' element={<Macrobiotic dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/mediterranean' element={<Mediterranean dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/nutrisystem' element={<NutriSystem dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/paleolithic' element={<Paleolithic dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/pescetarianism' element={<Pescetarianism dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/plantbased' element={<PlantBased dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/rawfood' element={<RawFood dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/slimfast' element={<SlimFast dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/south' element={<SouthBeach dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/vegan' element={<Vegan dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/vegetarianism' element={<Vegetarianism dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/weightwatchers' element={<WeightWatchers dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/whole30' element={<Whole30 dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/zone' element={<Zone dietPlan={dietPlan}/>}/>) : ""}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

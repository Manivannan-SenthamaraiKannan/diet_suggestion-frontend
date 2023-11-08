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
import Diet_Togo from "./Components/Recipe/Diet_Togo";
import Flexitarian from "./Components/Recipe/Flexitarian";
import Gluten_Free from "./Components/Recipe/Gluten_Free";
import Low_Calorie from "./Components/Recipe/Low_Calorie";
import Low_Fat from "./Components/Recipe/Low_fat";
import Macrobiotic from "./Components/Recipe/Macrobiotic";
import Mediterranean from "./Components/Recipe/Mediterranean";
import NutriSystem from "./Components/Recipe/NutriSystem";
import Paleolithic from "./Components/Recipe/Paleolithic";
import Pescetarianism from "./Components/Recipe/Pescetarianism";
import Raw_Food from "./Components/Recipe/Raw_Food";
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
                        <Route path='/diettogo' element={<Diet_Togo dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/dukan' element={<Dukan dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/flexitarian' element={<Flexitarian dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/gluten' element={<Gluten_Free dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/keto' element={<Keto dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/lowcalorie' element={<Low_Calorie dietPlan={dietPlan}/>}/>) : ""}
                    {isAuthenticated ? (
                        <Route path='/lowfat' element={<Low_Fat dietPlan={dietPlan}/>}/>) : ""}
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
                        <Route path='/rawfood' element={<Raw_Food dietPlan={dietPlan}/>}/>) : ""}
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

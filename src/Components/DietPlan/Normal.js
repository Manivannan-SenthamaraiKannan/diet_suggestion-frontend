import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import FoodPlan from '../Receipe/FoodPlan'

const Normal = () => {

    const navigate = useNavigate();
    const [dietPlan, setDietPlan] = useState();
    const [flag, setFlag] = useState(false);
    console.log(dietPlan)

    return (
        <div className='diets'>
            <button type='button' className='btn btn-outline-secondary' onClick={() => { setDietPlan('keto'); setFlag(true); navigate('/foodPlan') }}>Ketogenic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => setDietPlan('carbohydrate')}>Low-Carbohydrate</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => setDietPlan('plant')}>Plant-Based</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => setDietPlan('vegan')}>Veganism</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => setDietPlan('zone')}>Zone</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => setDietPlan('diabetic')}>Diabetic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => setDietPlan('vegetearian')}>Vegetearian</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => setDietPlan('dukan')}>Dukan</button>
            {flag && <FoodPlan receipe={dietPlan} />}
        </div>
    )
}

export default Normal

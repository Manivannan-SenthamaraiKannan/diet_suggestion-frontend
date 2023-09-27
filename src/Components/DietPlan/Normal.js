import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Normal = () => {

    const navigate = useNavigate();
    const [diet, setDiet] = useState([]);
    const endpointAPI = 'https://diet-suggestion-backend-0oso.onrender.com'

    const foodReceipe = (text) => {
        setDiet(foodReceipe);
        axios.get(`${endpointAPI}/${diet}`)
            .then((res) => setDiet(res.data))
            .catch((err) => console.error(err))
        navigate('/foodplan')
    }
    console.log(diet)

    return (
        <div className='diets'>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('keto')}>Ketogenic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('carbohydrate')}>Low-Carbohydrate</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('plant')}>Plant-Based</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('vegan')}>Veganism</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('zone')}>Zone</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('diabetic')}>Diabetic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('vegetearian')}>Vegetearian</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => foodReceipe('dukan')}>Dukan</button>
        </div>
    )
}

export default Normal

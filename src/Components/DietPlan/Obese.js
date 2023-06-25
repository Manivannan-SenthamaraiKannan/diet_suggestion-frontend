import React from 'react'
import { useNavigate } from 'react-router-dom'

const Obese = () => {

    const navigate = useNavigate()

    return (
        <div className='diets'>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Ketogenic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Mediterranean</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Intermittent</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Low-Carbohydrate</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Plant-Based</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Veganism</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Gluten-free</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Low-Fat</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Raw-Food</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Paleolithic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Weight Watchers</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Very low-calorie</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>South-Beach</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Atkins</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Vegetearian</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Dukan</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Alkaline</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Whole30</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Zone</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Diabetic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Slim-Fast</button>
        </div>
    )
}

export default Obese

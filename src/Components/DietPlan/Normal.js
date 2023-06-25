import React from 'react'
import { useNavigate } from 'react-router-dom'

const Normal = () => {

    const navigate = useNavigate();

    return (
        <div className='diets'>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Ketogenic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Low-Carbohydrate</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Plant-Based</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Veganism</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Zone</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Diabetic</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Vegetearian</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Dukan</button>
        </div>
    )
}

export default Normal

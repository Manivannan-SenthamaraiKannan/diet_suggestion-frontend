import React from 'react'
import { useNavigate } from 'react-router-dom'

const SevereThiness = () => {

    const navigate = useNavigate()

    return (
        <div className='diets'>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Carnivore</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>NutriSystem</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Alkaline</button>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate('/foodplan')}>Mediterranean</button>
        </div>
    )
}

export default SevereThiness

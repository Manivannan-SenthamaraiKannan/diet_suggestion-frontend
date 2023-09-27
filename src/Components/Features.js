import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js'
import Footer from './Footer.js';

const Features = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            {/* Features Page Content */}
            <div className='container'>
                <div className='py-3 text-left'>
                    <button className=' d-flex align-items-center justify-content-center btn btn-light' onClick={() => navigate('/')}>
                        <i className="bi bi-arrow-left" style={{ fontSize: "2rem" }}></i> Back to Home</button>
                </div>
                <div className='bg-BgSub px-16 pb-80 pt-48 text-center lg:pb-128 lg:pt-72'>
                    <h1 className="type-large-fat" style={{ color: "#42cd8c" }}>Nutrition Explained</h1>
                    <p style={{ fontSize: "2rem", lineHeight: "2.5rem" }}>Learn about nutrition from Lifesum’s in-house<br /> nutritionists and invited experts.</p>
                </div>

                <div className='py-5'>
                    {/* Features Page Menu Content goes below */}
                    <div className='text-center' style={{fontSize:"2rem",fontWeight:"bold"}}>Latest Stories</div>
                </div>
            </div>
            {/* End of features Page */}
            <Footer />
        </>
    )
}

export default Features
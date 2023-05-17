import React from 'react'

const LandingPage = () => {
    return (
        <div className='container-fluid py-5'>
            <div className='col-md-4'>
                <h1>Healthy Living.</h1>
                <h1>Simplified.</h1>
                <h4>The digital self-care app that helps<br />
                    you, recommend your Diet by measuring your BMI.</h4>
                <button type="button" className='btn btn-light' style={{ borderRadius: "2rem", border:"1px solid black" }}>Read More</button>
                <button type="button" className='btn btn-primary' style={{ borderRadius: "2rem" }}>Sign up</button>
            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
            </div>
        </div>
    )
}

export default LandingPage

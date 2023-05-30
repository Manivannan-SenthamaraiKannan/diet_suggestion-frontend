import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='left-container'>
                            <h1>Healthy Living.</h1>
                            <h1>Simplified.</h1>
                            <h4>The digital self-care app that helps you,<br /> recommend your Diet by measuring <br />your BMI.</h4>
                            <div className='button'>
                                <button type="button" className='btn btn-light'
                                    style={{ borderRadius: "2rem", border: "1px solid black", paddingLeft: "2rem", paddingRight: "2rem" }}>Read More</button>
                                <button type="button" className='btn btn-light'
                                    style={{ borderRadius: "2rem", border: "1px solid black", paddingLeft: "2rem", paddingRight: "2rem" }}>Sign up</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6' >
                        <div className='right-container'>
                            <h3><b>1,00,000 </b>Reviews</h3>
                            <h3>& counting.</h3>
                        </div>
                        <div className='rating1'>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <h3><i className="bi bi-apple" style={{ color: "black", paddingRight: "1rem" }}></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star"></i></h3>
                                <h3 style={{ paddingLeft: "1rem", color: "black" }}>4.6</h3>
                            </div>
                        </div>
                        <div className='rating2'>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <h3><i className="bi bi-google-play" style={{ color: "black", paddingRight: "1rem" }} ></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star-fill"></i></h3>
                                <h3><i className="bi-star"></i></h3>
                                <h3 style={{ paddingLeft: "1rem", color: "black" }}>4.4</h3>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </>
    )
}

export default LandingPage

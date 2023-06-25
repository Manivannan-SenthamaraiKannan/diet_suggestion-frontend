import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodPlan = (props) => {
    const navigate = useNavigate();
    const [diet, setDiet] = useState();

    useEffect(() => {
        getDiet()
    }, [])


    const endpointAPI = 'https://diet-suggestion-backend-ixup.onrender.com'
    // axios get call
    const getDiet = () => {
        axios.get(`${endpointAPI}/keto`).then((res) => {
            if (res.status === 401) {
                console.log("Data Not Found")
            }
            console.log(res.data)
            setDiet(res.data)
        })
    }
    console.log(diet)
    return (
        <div>
            <Navbar />
            <div className="container">
                <div >
                    <button className="btn btn-light" type='button' onClick={() => navigate('/quiz')}><span><i class="bi bi-arrow-left-circle"></i></span></button>
                </div>
                <hr />
                {/* cards section */}
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FoodPlan;
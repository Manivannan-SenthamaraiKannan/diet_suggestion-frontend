import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodPlan = (props) => {
    const navigate = useNavigate();
    const [diet, setDiet] = useState([]);

    useEffect(() => {
        getDiet()
    }, [])


    const endpointAPI = 'https://diet-suggestion-backend-0oso.onrender.com'
    // axios get call
    const getDiet = () => {
        axios.get(`${endpointAPI}/keto`)
            .then((res) => setDiet(res.data))
            .catch((err) => console.error(err))
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
                    <div className="card-body" >
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                {/* {
                    diet.forEach((element) => {
                        // for (let i = 0; i < element.hints.length; i++) {
                        // }
                        // element.hints.map(()=>{

                        // })
                    })
                } */}
            </div>
            <Footer />
        </div >
    )
}

export default FoodPlan;
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const FoodPlan = ({ dietPlan }) => {
    console.log(dietPlan)
    const navigate = useNavigate();
    const [data, setData] = useState();
    const endpointAPI = 'https://diet-suggestion-backend-0oso.onrender.com';

    useEffect(() => {
        receipeData();
    })

    const receipeData = () => {
        axios.get(`${endpointAPI}/${dietPlan}`)
            .then((res) => setData(res.data))
            .catch((err) => console.error(err))
    }

    console.log(data)


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
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    )
}

export default FoodPlan;
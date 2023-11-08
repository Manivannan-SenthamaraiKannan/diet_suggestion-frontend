import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Navbar";
import Footer from "../Footer";

const SevereThinness = ({ setDiet }) => {
    const setDietName = (diet) => {
        setDiet(diet)
    }

    return (
        <>
            <Navbar />
            <div className="container py-3">
                <div className='diets'>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Carnivore</h5>
                            <Link to='/carnivore' className="btn btn-primary"
                                onClick={() => setDietName("carnivore")}
                                style={{ background: "#42cd8c" }}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Nutri-System</h5>
                            <Link to='/nutrisystem' className="btn btn-primary"
                                onClick={() => setDietName("nutrisystem")}
                                style={{ background: "#42cd8c" }}
                            >Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Alkaline</h5>
                            <Link to="/alkaline" className="btn btn-primary"
                                onClick={() => setDietName("alkaline")}
                                style={{ background: "#42cd8c" }}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Mediterranean</h5>
                            <Link to="/mediterranean" className="btn btn-primary"
                                onClick={() => setDietName("mediterranean")}
                                style={{ background: "#42cd8c" }}>Get Recipe</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default SevereThinness

import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from "../Navbar";
import Footer from "../Footer";

const Normal = ({setDiet}) => {

    const setDietName = (diet) => {
        setDiet(diet)
    }

    return (
        <>
            <Navbar/>
            <div className="container py-3">
                <div className='diets'>
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Keto</h5>
                            <Link to='/keto' className="btn btn-primary"
                                  onClick={() => setDietName("keto")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Low Carbohydrate</h5>
                            <Link to='/carbohydrate' className="btn btn-primary"
                                  onClick={() => setDietName("carbohydrate")}
                                  style={{background: "#42cd8c"}}
                            >Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Plant-Based</h5>
                            <Link to="/plant" className="btn btn-primary"
                                  onClick={() => setDietName("plant")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Vegan</h5>
                            <Link to="/vegan" className="btn btn-primary"
                                  onClick={() => setDietName("vegan")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Zone</h5>
                            <Link to="/zone" className="btn btn-primary"
                                  onClick={() => setDietName("zone")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Diabetic</h5>
                            <Link to="/diabetic" className="btn btn-primary"
                                  onClick={() => setDietName("diabetic")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Dukan</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("dukan")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Normal

import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from "../Navbar";
import Footer from "../Footer";

const Obese = ({setDiet}) => {

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
                            <h5 className="card-title">Mediterranean</h5>
                            <Link to='/carbohydrate' className="btn btn-primary"
                                  onClick={() => setDietName("mediterranean")}
                                  style={{background: "#42cd8c"}}
                            >Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Intermittent-Fasting</h5>
                            <Link to="/plant" className="btn btn-primary"
                                  onClick={() => setDietName("fasting")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Low-Carbohydrate</h5>
                            <Link to="/vegan" className="btn btn-primary"
                                  onClick={() => setDietName("carbohydrate")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Plant-Based</h5>
                            <Link to="/zone" className="btn btn-primary"
                                  onClick={() => setDietName("plant")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Veganism</h5>
                            <Link to="/diabetic" className="btn btn-primary"
                                  onClick={() => setDietName("vegan")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Gluten-Free</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("gluten")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Low-Fat</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("lowfat")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Raw-Food</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("rawfood")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Paleolithic</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("paleolithic")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Weight-Watchers</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("weight")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Very Low-Calorie</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("lowcalorie")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">South-Beach</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("south")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Atkins</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("atkins")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Vegetarian</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("vegetarianism")}
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

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Alkaline</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("alkaline")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Whole-30</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("whole30")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Zone</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("zone")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Diabetic</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("diabetic")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Slim-Fast</h5>
                            <Link to="/dukan" className="btn btn-primary"
                                  onClick={() => setDietName("slimfast")}
                                  style={{background: "#42cd8c"}}>Get Recipe</Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Obese

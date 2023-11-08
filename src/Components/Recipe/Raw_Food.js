import React, {useEffect, useState} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {APIENDPOINT} from "../../Global";
import axios from "axios";

const onSale = {
    top: '0.5rem',
    right: '0.5rem'
}

const Raw_Food = ({dietPlan}) => {

    const [dietData, setDietData] = useState([]);

    useEffect(() => {
        axios.get(`${APIENDPOINT}/${dietPlan}`)
            .then(res => {
                setDietData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Navbar/>
            <div className="container py-3">
                <h3>Raw_Food Diet Recipe</h3>
                <div className="diets">
                    {
                        dietData.map((dietDatum, key) => (
                            dietDatum.hints.map((data) => {
                                    return (
                                        <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" key={key}
                                             style={{width: "18rem"}}>
                                            <div className="card-body">
                                                <div className="badge bg-dark text-white position-absolute"
                                                     style={onSale}>Raw_Food
                                                </div>
                                                <h5 className="card-text" style={{height: "6rem", textAlign: "justify"}}>
                                                    {data.food.label}
                                                </h5>
                                                <hr/>
                                                <div>
                                                    <table className="table table-danger table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Fat</th>
                                                            <th scope="col">Carbs</th>
                                                            <th scope="col">Protein</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>{data.food.nutrients.FAT.toFixed(2)} g</td>
                                                            <td>{data.food.nutrients.CHOCDF.toFixed(2)} g</td>
                                                            <td>{data.food.nutrients.PROCNT.toFixed(2)} g</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <hr/>
                                                <p className="text-body">{data.food.foodContentsLabel}</p>
                                            </div>
                                        </div>)
                                }
                            )))
                    }
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default Raw_Food
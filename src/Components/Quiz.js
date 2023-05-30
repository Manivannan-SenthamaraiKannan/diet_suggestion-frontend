import React, { useState } from 'react'
import Navbar from './Navbar';
import SevereThiness from '../Components/DietPlan/SevereThiness'
import Normal from '../Components/DietPlan/Normal'
import Obese from '../Components/DietPlan/Obese'

const Quiz = () => {

    const [BMI, setBMI] = useState();
    const [result, setResult] = useState();

    const handleInput = (value) => {
        return setBMI((detail) => {
            return { ...detail, ...value }
        })
    }

    const submit = () => {
        let height = BMI.height * 0.01;
        height = Math.pow(height, 2);
        setResult((BMI.weight / height).toFixed(2))
    }

    let BMIData = parseFloat(result);

    return (
        <>
            <Navbar />
            {/* Quiz */}
            <div className='container py-3' style={{ backgroundColor: "cornsilk" }}>
                <div className='row quiz-content'>
                    <div className='col-md-6'>
                        <h4 className='text-center' style={{ margin: "0 auto" }}>BMI Calculator</h4>
                        <div className="row g-3 align-items-center px-2 py-5">
                            <div className="col-auto">
                                <label className="col-form-label">Age</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" aria-labelledby="passwordHelpInline" />
                            </div>
                            <div className='col-auto'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" for="inlineCheckbox2">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className='row g-3 align-items-center py-2'>
                            <div className="col-auto">
                                <label className="col-form-label">Height</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" onChange={(e) => { handleInput({ height: e.target.value }) }} />
                            </div>
                            <div className="col-auto">
                                <label className="col-form-label">Weight</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" placeholder='(in cms)'
                                    onChange={(e) => { handleInput({ weight: e.target.value }) }} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type='button' className='btn btn-primary' onClick={submit}>Submit</button>
                        </div>
                        <h4 className='text-left py-3'>Your Calculated BMI : {result}</h4>
                    </div>

                    <div className='col-md-6'>
                        <h4 className='text-center' style={{ margin: "0 auto" }}>BMI TABLE</h4>
                        <div className='container d-flex justify-content-center align-items-center py-3'>
                            <table className='table-bordered'>
                                <thead className='text-center'>
                                    <tr>
                                        <th scope="col">Classification</th>
                                        <th scope="col">BMI range - Kg/m<sup>2</sup></th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        <td >Severe Thiness</td>
                                        <td >&lt;16 </td>
                                    </tr>
                                    <tr>
                                        <td >Moderate Thiness</td>
                                        <td >16 - 17 </td>
                                    </tr>
                                    <tr>
                                        <td >Mild Thiness</td>
                                        <td >17 - 18.5 </td>
                                    </tr>
                                    <tr>
                                        <td >Normal</td>
                                        <td >18.5 - 25 </td>
                                    </tr>
                                    <tr>
                                        <td >Over Weight</td>
                                        <td >25 - 30</td>
                                    </tr>
                                    <tr>
                                        <td >Obese Class l</td>
                                        <td >30 - 35</td>
                                    </tr>
                                    <tr>
                                        <td >Obese Class ll</td>
                                        <td >35 - 40</td>
                                    </tr>
                                    <tr>
                                        <td >Obese Class lll</td>
                                        <td >&gt;40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Diet Recommendation */}
            <div className='container py-3'>
                <h4 className='text-left'>
                    Your Recommended Diet are :
                </h4>
                {(BMIData <= 16 && BMIData >= 18.5) && <SevereThiness />}
                {(BMIData >= 18.5 && BMIData <= 25) && <Normal />}
                {(BMIData >= 25 && BMIData <= 40) && <Obese />}

            </div>
        </>

    )
}

export default Quiz

import React from 'react'
import { useNavigate } from 'react-router-dom'

const DietHack = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='py-5' style={{ backgroundColor: "#FFFFFF" }}>
                <h1 style={{ textAlign: "center", fontFamily: "math" }}>What is DietHack?</h1>
                <div className='container-fluid'>
                    <div className='row py-5'>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center pb-3'><img src='https://lifesum.com/media/usp-diets-45675b0b.svg' alt='diet' /></div>
                            <h4 style={{ textAlign: "center" }}>Find a Diet you Love</h4>
                            <p style={{ textAlign: "center" }}>Find a nutritious Diet that fits your lifestyle and<br />
                                food preferences. Take charge of your daily<br />
                                habits with one of the many ongoing Diets<br />
                                including Clean Eating and High Protein.</p>

                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center pb-3'><img src='https://lifesum.com/media/usp-mealplans-13b2e368.svg' alt='diet' /></div>
                            <h4 style={{ textAlign: "center" }}>Start a simplified Meal Plan</h4>
                            <p style={{ textAlign: "center" }}>Follow a 7-21 day Meal Plan and get four pre-<br />
                                planned recipes a day. Depending on your<br />
                                health goals, there are many Meal Plans to<br />
                                choose from including Keto Burn and Vegan <br />
                                for a week.</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center pb-3'><img src='https://lifesum.com/media/usp-recipes-23c9a7b7.svg' alt='diet' /></div>
                            <h4 style={{ textAlign: "center" }}>Enjoy hundreads of tasty recipes</h4>
                            <p style={{ textAlign: "center" }}>Enjoy hundreds of easy-to-cook recipes filled<br />
                                with nutritious and tasty food. All of the recipes<br />
                                include information about their nutritional<br />
                                value so you can keep track of your daily energy<br />
                                intake.</p>
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center pb-3'><img src='https://lifesum.com/media/usp-barcode-e826085a.svg' alt='diet' /></div>
                            <h4 style={{ textAlign: "center" }}>Use the helpful barcode scanner</h4>
                            <p style={{ textAlign: "center" }}>Identify your food items with the super easy-to-<br />
                                use barcode scanner. Scan the item, log it and<br />
                                get the nutritional information you need to stay<br />
                                on track.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center pb-3'><img src='https://lifesum.com/media/usp-trackers-d12fa952.svg' alt='diet' /></div>
                            <h4 style={{ textAlign: "center" }}>Track your way to success</h4>
                            <p style={{ textAlign: "center" }}>Track your activities and what you eat with the<br />
                                help of our food-, exercise- and water trackers<br />
                                to maintain a balanced everyday life.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center pb-3'><img src='https://lifesum.com/media/usp-personalize-1efee572.svg' alt='diet' /></div>
                            <h4 style={{ textAlign: "center" }}>Create your own health Journey</h4>
                            <p style={{ textAlign: "center" }}>To help you reach your goals and customize<br />
                                your health journey you can add your favorite<br />
                                meals, food items, recipes and exercises to your<br />
                                Favorites.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-center mb-48 lg:mb-64'>
                    <button type='button' className='btn btn-light'
                        style={{
                            border: '1.5px solid black',
                            borderRadius: '2em',
                            paddingLeft: '3rem',
                            paddingRight: '3rem',
                            fontSize: 'large',
                        }}
                        onClick={() => {
                            navigate('/features')
                        }}    >More Features</button>
                </div>
            </div>
        </div >
    )
}

export default DietHack;

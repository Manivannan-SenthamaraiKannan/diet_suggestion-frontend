import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Features = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            {/* Features Page Content */}
            <div className='container'>
                <div className='py-3 text-left'>
                    <button className=' d-flex align-items-center justify-content-center btn btn-light' onClick={() => navigate('/')}>
                        <i className="bi bi-arrow-left" style={{ fontSize: "2rem" }}></i> Back to Home</button>
                </div>
                <div className='bg-BgSub px-16 pb-80 pt-48 text-center lg:pb-128 lg:pt-72'>
                    <h1 className="type-large-fat" style={{ color: "#42cd8c" }}>Nutrition Explained</h1>
                    <p style={{ paddingTop: "3rem", paddingBottom: "3rem", fontSize: "2rem", lineHeight: "2.5rem" }}>Learn about nutrition from Diet Suggestion in-house<br /> nutritionists and invited experts.</p>
                </div>
                <div className='py-5'>
                    {/* Features Page Menu Content goes below */}
                    <div className='text-center' style={{ fontSize: "2rem", fontWeight: "bold" }}>Latest Stories</div>

                    <div className='d-flex align-items-center justify-content-center'
                        style={{ paddingTop: "3rem", paddingBottom: "3rem", rowGap: "2rem", columnGap: "2rem", flexWrap: "wrap" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1695128359-gettyimages-524326685.jpg?crop=focalpoint&fit=crop&fm=jpg&h=160&w=240" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Insights from Lifesum Experts on National Women's Health and Fitness Day</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1634664746-gettyimages-1063025552.jpg?crop=focalpoint&fit=crop&fm=jpg&h=160&w=240" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">10 Tips to Turn Thanksgiving into a Budget-Friendly Plant-Based Gathering.</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1647375035-gettyimages-803596936-e1529416252997.jpg?crop=focalpoint&fit=crop&fm=jpg&h=160&w=240" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Your Ultimate Guide to Healthier Menu Options at Top Food Chains in pyramid.</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1647373922-plant-based-endurance-e1578411704166.jpg?crop=focalpoint&fit=crop&fm=jpg&h=160&w=240" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">How to hit your macro split on a plant-based diet and vegan diet based our recipe.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Diet Section Starts Here */}
                    <div className='text-center' style={{ fontSize: "2rem", fontWeight: "bold" }}>Diet Section</div>
                    <div className='d-flex align-items-center justify-content-center'
                        style={{ paddingTop: "3rem", paddingBottom: "3rem", rowGap: "2rem", columnGap: "2rem", flexWrap: "wrap" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612886304-blogbackclean-eating-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Clean Eating</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612889460-blogbackfasting-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Fasting</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612889607-blogbackscandinavian-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Scandinavian</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612889648-blogbackintermittent-fasting-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Intermittent Fasting</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612947735-blogbackpaleo-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Paleo</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612889705-blogbackvegetarian-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Vegetarian</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612889744-blogbacksugar-detox-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sugar Detox</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612952223-blogbackhigh-prot-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">High Protein</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612890050-blogbackmediterrranean-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mediterranean</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.datocms-assets.com/23496/1612890101-blogbackketo-2x.png?crop=focalpoint&fit=crop&fm=jpg&h=250&w=375" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Keto</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of features Page */}
            <Footer />
        </>
    )
}

export default Features
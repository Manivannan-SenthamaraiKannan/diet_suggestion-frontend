import React from 'react'
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Recipe = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {/* Receipe Page content Starts */}
      <div className='py-5 container'>
        <button className=' d-flex align-items-center justify-content-center btn btn-light' onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left" style={{ fontSize: "1rem" }}></i> Back to Home</button>
      </div>
      <div className='bg-BgSub px-16 pb-80 pt-48 text-center lg:pb-128 lg:pt-72'>
        <h1 className="type-large-fat" style={{ color: "#42cd8c" }}>Diet Receipe's</h1>
        <p style={{ paddingTop: "3rem", paddingBottom: "3rem", fontSize: "2rem", lineHeight: "2.5rem" }}>Learn about Diet Receipe from Diet Suggestion in-house<br /> Dietist and  experts.</p>
      </div>
      <div className='container'>
        {/* Diet Section Starts Here */}
        <div className='d-flex align-items-center justify-content-start'
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
    </>
  )
}

export default Recipe
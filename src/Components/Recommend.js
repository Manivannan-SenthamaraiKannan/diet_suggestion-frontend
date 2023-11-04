import React from 'react'
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from 'react-router-dom'
import {toast, ToastContainer} from "react-toastify";

const Recommend = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth0();
    const notify = () => toast("Please Login to Continue")

    return (
        <>
            <ToastContainer/>
            <div className='col-lg-12 col-md-6 ' style={{paddingTop: "2rem", paddingBottom: "3rem"}}>
                <div className='row' style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: 'auto',
                    background: "#FAFAF5",
                    width: "80"
                }}>
                    <div className='col-md-6 col-sm-12 w-auto'>
                        <img src='https://lifesum.com/media/apple-quiz-7a2360b2.svg' width='202' height='202'
                             className='self-center md-16 lg:mr-64 shrink-0 transition' alt='...'
                             style={{width: "200px"}}/>
                    </div>
                    <div className='col-md-6 col-sm-12 w-auto'>
                        <h2 style={{paddingBottom: "2rem"}}>What's the right Meal Plan or Diet for you?</h2>
                        <div className='text-center'>
                            <button type='button' style={{
                                backgroundColor: "#27C391",
                                width: "10em", height: "3em",
                                color: "whitesmoke",
                                borderColor: "27C391",
                                borderRadius: "2rem"
                            }}
                                    onClick={() => {
                                        // eslint-disable-next-line no-unused-expressions
                                        isAuthenticated ? (navigate('/quiz')) : ""
                                    }}
                                    onClickCapture={notify}>Take the Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommend

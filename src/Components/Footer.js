import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container text-left'>
                <h1>DietHack</h1>
            </div >
            <div className="container">
                <footer className="py-3">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>WORK AT DietHack</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">Careers</li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>CONNECT</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">Instagram</li>
                                <li className="nav-item mb-2">YouTube</li>
                                <li className="nav-item mb-2">Pinterest</li>
                                <li className="nav-item mb-2">Facebook</li>
                                <li className="nav-item mb-2">Twitter</li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>LEARN MORE</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">About DietHack</li>
                                <li className="nav-item mb-2">Press</li>
                                <li className="nav-item mb-2">Articles</li>
                                <li className="nav-item mb-2">DietHack for Work</li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                            <div className='py-3 d-flex align-items-center gap-4' >
                                <h2><i className="bi bi-apple"></i></h2>
                                <h2><i className="bi bi-google-play"></i></h2>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-center py-2 border-top">
                        <p>DietHack © 2023 . All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;

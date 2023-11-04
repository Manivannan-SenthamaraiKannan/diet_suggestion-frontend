import React from 'react'
import 'bootstrap/js/src/dropdown'
import {Link} from 'react-router-dom'
import {useAuth0} from "@auth0/auth0-react";
import {toast, ToastContainer} from "react-toastify";

const Navbar = () => {
    const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const notify = () => toast("Please Login to continue")

    return (
        <div>
            <ToastContainer/>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/"
                          style={{fontSize: "xx-large", fontWeight: "500", fontFamily: "Math"}}>DietHack</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link"
                                      style={{color: "black", fontSize: "large"}} onClick={notify}
                                      to={isAuthenticated ? ("/features") : ""}>Features</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <div className="dropdown">
                                <button className="btn btn-light" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" style={{background: "#42cd8c", color: "white"}}>
                                    <i className="bi bi-person-circle"></i> Profile
                                </button>
                                {isAuthenticated ? (
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/features">Features</Link></li>
                                        <li><Link className="dropdown-item" to="/receipe">My Receipes</Link></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><p className="dropdown-item"
                                               onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>LogOut</p>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="dropdown-menu">
                                        <li><p className="dropdown-item" onClick={() => loginWithRedirect()}>LogIn</p>
                                        </li>
                                    </ul>
                                )
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

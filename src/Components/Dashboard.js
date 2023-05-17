import React from 'react'
import Navbar from './Navbar.js'
import LandingPage from './LandingPage.js';
import DietHack from './DietHack.js';

const Dashboard = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* landing Page */}
            <LandingPage />
            {/* What is DietHack*/}
            <DietHack />
            {/* more features */}
            {/* Quiz-what is the right meal for you */}
            {/* readmore and signup  */}
            {/* Footer */}
        </div>
    )
}

export default Dashboard;

import React from 'react'
import Navbar from './Navbar.js'
import LandingPage from './LandingPage.js';
import DietHack from './DietHack.js';
import Recommend from './Recommend.js';
import Footer from './Footer.js';

const Dashboard = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* landing Page */}
            <LandingPage />
            {/* What is DietHack*/}
            <DietHack />
            {/* Quiz-what is the right diet for you */}
            <Recommend />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Dashboard;

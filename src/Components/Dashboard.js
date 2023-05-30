import React from 'react'
import Navbar from './Navbar.js'
import LandingPage from './LandingPage.js';
import DietHack from './DietHack.js';
import Recommend from './Recommend.js';
import Footer from './Footer.js';
import Quiz from './Quiz.js';

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
            <Recommend />
            {/* readmore and signup  */}
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Dashboard;

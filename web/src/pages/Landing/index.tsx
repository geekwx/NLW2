import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';


function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="loago-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={LandingImg} alt="Plataforma de estudos" className="hero-image"/>
            </div>
        </div>

    )
}

export default Landing;
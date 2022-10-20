import React from 'react';
import Contact from '../../components/Contact/Contact';
import "./about.css";

import peinture from "../../asset/peinture.jpeg";

const About = () => {
    return (
        <div className='about-container d-center column'>
            <div className='about-content d-center column'>
                <h1>Balles GST</h1>
                <p>La solution parfaite pour couvrir de grandes surfaces ouvertes, des réservoirs tels que :</p>
                <ul className='d-center column'>
                    <li>Eaux usées</li>
                    <li>Biomasse</li>
                    <li>Lagune à lisier</li>
                    <li>Matières dangereuses</li>
                    <li>Bassins de carpes koï et poissons</li>
                    <li>Réservoirs  à surface ouverte chauffés ou refroidis</li>
                    <li>Bassins des aéroports (camouflage)</li>
                </ul>
                <img src={peinture} alt="peinture" />
            </div>
            <Contact />
        </div>
    );
};

export default About;
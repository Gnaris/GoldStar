import React from 'react';
import Contact from '../Contact/Contact';
import Shop from '../Shop/Shop';
import "./home.css";

const Home = () => {
    return (
        <div className='home-container d-center column'>
            <div className='home-presentation d-center column'>
                <div className='home-produit-info d-center column'>
                    <h1>balles gst</h1>
                    <h2>Solution performante pour couvrir de large surface liquide</h2>  
                </div>
                <button>Shop Now</button>
            </div>
            <div className='produit-container d-center column'>
                <h1>Nos Produits</h1>
                <p>
                    Une solution simple qui offre une réduction de la perte de liquide par évaporation jusqu'à 
                    <br></br>90 % des étangs à ciel ouvert
                    <br></br>et des bassins d’eau de collecte de pluie ou de forage, tout en permettant 
                    <br></br>les mouvements des eaux.
                </p>
            </div>
            <Shop/>
            <Contact/>
        </div>
    );
};

export default Home;
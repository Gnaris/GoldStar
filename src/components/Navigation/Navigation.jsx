import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navigation.css";

import user from "../../asset/user.svg";
import panier from "../../asset/panier.svg";
import loupe from "../../asset/loupe.svg";

const Navigation = () => {
    return (
        <nav className='d-center column'>
            <div className='f-bar d-center'>
                <div className='recherche-container d-center'>
                    <img src={loupe} alt="loupe" />
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className='auth-container d-center'>
                    <div className='connexion-container d-center'>
                       <img src={user} alt="user" />
                        <p>Se connecter</p> 
                    </div>
                    <img src={panier} alt="panier" />
                </div>
            </div>
            <div className='s-bar d-center'>
                <h1>gold-star-sahara</h1>
                <ul className='d-center'>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/shop"}>Shop</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
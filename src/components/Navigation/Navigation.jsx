import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./navigation.css";

import user from "../../asset/user.svg";
import panier from "../../asset/panier.svg";
import loupe from "../../asset/loupe.svg";
import { useSelector } from 'react-redux';

const Navigation = () => {

    const [open, setOpen] = useState(false);

    const produits = useSelector((s) => s.product.product)

    const hide = () => {
        setTimeout(() => {
            setOpen(false)
        }, 100)
    }

    return (
        <nav className='d-center column'>
            <div className='f-bar d-center'>
                <div className='recherche-container d-center'>
                    <label htmlFor="search"></label>
                    <img src={loupe} alt="loupe" />
                    <input type="text" placeholder="Search..." id='search' onFocus={(e) => { setOpen(true) }} onBlur={(e) => hide()}/>
                </div>
                <div className='auth-container d-center'>
                    <div className='connexion-container d-center'>
                        <img src={user} alt="user" />
                        <p>Se connecter</p>
                    </div>
                    <img src={panier} alt="panier" />
                </div>
            </div>
            <div className={open ? 'open-product product-bar' : "product-bar"}>
                <div className='search-product-container d-center column'>
                    <p>Articles les plus populaires</p>
                    {produits.map((produit, index) =>
                        <a onClick={(e) => {console.log("g")}} href='about' key={index} className='search-product-card d-center'>
                            <img src={produit.img} alt="product" />
                            <div className='product-search-info d-center column'>
                                <h1>{produit.name}</h1>
                                <p>{produit.comment}</p>
                            </div>
                        </a>
                    )}
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
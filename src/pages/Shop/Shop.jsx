import React from 'react';
import balle from '../../asset/produit.jpeg';
import "./shop.css";

const Shop = () => {
    return (
        <div className='shop-container d-center'>
            <div className='product-container d-center column'>
                <div className='product-image d-center column'>
                    <img src={balle} alt="balle" />
                    <p className='d-center'>Aperçu rapide</p>
                </div>
                <div className='product-info d-center column'>
                    <h3>Balle GST</h3>
                    <p>1,00€</p>
                </div>
                <button className='product-button'>Ajouter au panier</button>
            </div>
        </div>
    );
};

export default Shop;
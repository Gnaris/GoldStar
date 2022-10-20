import React from 'react';
import { useSelector } from 'react-redux';
import "./shop.css";

const Shop = () => {

    const produits = useSelector((state) => state.product.product)

    return (
        <div className='shop-container d-center'>
            {produits.map((produit, index) =>
                <div key={index} className='product-container d-center column'>
                    <div className='product-image d-center column'>
                        <img src={produit.img} alt="img-produit" />
                        <p className='d-center'>Aperçu rapide</p>
                    </div>
                    <div className='product-info d-center column'>
                        <h3>{produit.name}</h3>
                        <p>{produit.price}</p>
                    </div>
                    <button className='product-button'>Ajouter au panier</button>
                </div>
            )}
        </div>
    );
};

export default Shop;
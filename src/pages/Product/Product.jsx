import React from 'react';
import { useSelector } from 'react-redux';

const Product = () => {

    const produit = useSelector((s) => s.product.clicked)

    console.log(produit)
    return (
        <div className='product-page-container d-center'>
            <img src={produit.img} alt="produit" />
            <div>
                <h1>{produit.name}</h1>
                <h2>{produit.price}</h2>
                <p>
                    {produit.comment}
                </p>
                <p>Quantité</p>
                <input type="number" value={0}/>
                <div>
                    <div>
                        <input type="submit" value={"Ajouter au panier"}/>
                        <button>❤</button>
                    </div>
                    <input type="submit" value="Commander et payer" />
                </div>
            </div>
        </div>
    );
};

export default Product;
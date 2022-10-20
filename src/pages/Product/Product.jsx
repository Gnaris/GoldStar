import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Contact from '../../components/Contact/Contact'
import "./product.css";
import { setQuantities } from '../../store/slice/product';
import Modale from '../../components/Modale/Modale';

const Product = () => {

    const dispath = useDispatch()
    const { id } = useParams();
    const produit = useSelector((s) => s.product.product[id])
    const quantity_ref = useRef(0);
    const [openModale, setOpenModale] = useState(false)

    const changeQuantity = (e) => {
        dispath(setQuantities(quantity_ref.current.value))
    }

    return (
        <div className='product-container d-center column'>
            <div className='product-page-container d-center'>
                <div className='product-img d-center'>
                    <img className='img-product' src={produit.img} alt="produit" />
                </div>
                <div className='product-page-info d-center column'>
                    <h1>{produit.name}</h1>
                    <h2>{produit.price}</h2>
                    <p>
                        {produit.comment}
                    </p>
                    <div className='quantity-container d-center column'>
                        <p>Quantité</p>
                        <input type="number" ref={quantity_ref} onChange={changeQuantity}/>
                    </div>
                    <div className='product-option-container d-center column'>
                        <div className='product-option d-center'>
                            <input type="submit" value={"Ajouter au panier"} />
                            <button>❤</button>
                        </div>
                        <input className='btn-commander' type="submit" value="Commander et payer" onClick={(e) => setOpenModale(true)}/>
                    </div>
                </div>
            </div>
            <Contact />
            <Modale open={openModale} setOpen={setOpenModale}>
                <h1>Hello</h1>
            </Modale>
        </div>

    );
};

export default Product;
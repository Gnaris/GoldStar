import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <div className='contact-container d-center column'>
                <div className='contact-content d-center'>
                    <div className='contact-info d-center column'>
                        <h1>Gold Star Sahara</h1>
                        <div className='contact-coordonnee d-center column'>
                            <p>
                                A : 160 avenue Paul Vaillant Couturier,
                                <br></br>93120 La Courneuve
                                <br></br>France
                                <br></br>E : goldstarsahara@gmail.com
                            </p>
                            <p>LUN - VEN : 7h - 18h</p>
                            <p>
                                FAQ / Shipping & Returns /
                                <br></br>Store Policy /
                                <br></br>Payment Methods
                            </p>
                        </div>
                    </div>
                    <div className='contact-input'>
                        <div>
                            <input className='input-contact' type="text" name="" id="" />
                            <input className='input-contact' type="text" name="" id="" />
                        </div>
                        <input className='input-contact' type="text" />
                        <textarea className='input-contact'></textarea>
                        <div>
                            <p>Get our Newsletters</p>
                            <div>
                                <input className='input-contact' type="text" />
                                <button>Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Contact;
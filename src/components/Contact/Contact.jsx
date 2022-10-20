import React from 'react';
import "./contact.css";
import map from "../../asset/map.png";

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
                <div className='contact-input d-center column'>
                    <div>
                        <div className='contact-user d-center'>
                            <input className='contact-input-info' type="text" placeholder='Name' />
                            <input className='contact-input-info' type="text" placeholder='Email' />
                        </div>
                        <input className='contact-input-info' type="text" placeholder='Subject' />
                        <div className='contact-message d-center column'>
                            <textarea className='contact-input-info' placeholder='Message'></textarea>
                            <input type="submit" value="SEND" />
                        </div>
                    </div>
                    <div className='newsletter-container d-center column'>
                        <p>Get our Newsletters</p>
                        <div className='newsletter-form d-center'>
                            <input type="text" placeholder='Enter your email here' />
                            <button>Subscribe Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='google-map-container'>
                <img src={map} alt="map" />
            </div>
        </div>
    );
};

export default Contact;
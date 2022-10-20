import React from 'react';
import "./modale.css";

const Modale = ({open, children}) => {
    return (
        <div className={open ? 'modale d-center open-modale' : 'modale d-center'}>
            {/* <div className='modale-background'></div> */}
            <div className='modale-content d-center column'>
                {children}
            </div>
        </div>
    );
};

export default Modale;
import React from 'react';

const Slots = (props) => {
    return ( 
        <>
        <div className="slot-box">
            <div className="slot-info">
            <h3>{props.name}</h3>
            <h5>{props.address}, {props.pincode}</h5>
            <p>{props.min_age}+</p>
            Vaccine: {props.vaccine} ({props.fee==='0'?"Free":`₹ ${props.fee}`})
            </div>
            <div className="slot-links">
                <a href="https://selfregistration.cowin.gov.in" target="_blank" rel="noopener noreferrer">
                <p>Capacity: {props.capacity}</p>
                <p className="light">Book on Cowin</p>
                </a>
            </div>
        </div>
        </>
     );
}
 
export default Slots;
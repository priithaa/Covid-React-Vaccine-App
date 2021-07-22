import React from 'react';

const Slots = (props) => {

    let avail = 0;
    if(props.dose === 'All')
        avail = props.capacity
    if(props.dose==="Dose 1")
        avail = props.dose1
    if(props.dose2==="Dose 2")
        avail = props.dose2
    return ( 

        <>
        {props.age==='All'?
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
        </div>:
        props.age==props.min_age?
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
        </div>:<></>}
        </>
     );
}
 
export default Slots;
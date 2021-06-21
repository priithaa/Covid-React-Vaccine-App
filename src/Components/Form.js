import React,{useState} from 'react'
import District from './District';
import Pincode from './Pincode';
import {StateObject} from '../Constants';

const Form = ({stateID,setStateID,districtID,setDistrictID,pincode,setPincode,type,setType}) => {
    return ( 
        <>
            <h1>Vaccine Checker</h1>
            <div className="form-header">
                <h3>Available Slots</h3>
                <button className={type===0?'checked':''} onClick={()=>setType(0)}>District </button>
                <button className={type===1?'checked':''} onClick={()=>setType(1)}>Pincode</button>
            </div>
            {
                type===0?<District StateObject={StateObject} 
                stateID={stateID}
                setStateID={setStateID}
                districtID={districtID} 
                setDistrictID={setDistrictID}
                />:
                <Pincode StateObject={StateObject} pincode={pincode} setPincode={setPincode}/>
            }
        </>
     );
}
 
export default Form;
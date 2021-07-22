import React,{useState} from 'react'
import District from './District';
import Pincode from './Pincode';
import {StateObject} from '../Constants';

const Form = ({stateID,setStateID,districtID,setDistrictID,pincode,setPincode,type,setType,age,setAge
,dose,setDose}) => {
    return ( 
        <>
            <h1>Vaccine Availability</h1>
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
                age={age}
                setAge ={setAge}
                dose={dose}
                setDose={setDose}
                />:
                <Pincode StateObject={StateObject} pincode={pincode} setPincode={setPincode}
                age={age}
                setAge ={setAge}
                dose={dose}
                setDose={setDose}/>
            }
        </>
     );
}
 
export default Form;
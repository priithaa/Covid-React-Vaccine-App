import React,{useState} from 'react';


const Filters = (props) => {
    console.log(props)
    return ( 
        <div className="filters">
                {/* <h6>Select Doses</h6> */}
                <label htmlFor="Dosage">Select Dosage</label>
                <select name="Dosage" id="" value={props.dose} onChange={(e)=>props.setDose(e.target.value)}>
                {
                    props.Doses.map((m)=><option value={m} key={m}>{m}</option>)
                }
                </select>
                {/* <h6>Select Minimum Age</h6> */}
                <label htmlFor="Minimum Age">Select Age</label>
                <select name="Minimum Age" id="" value={props.age} onChange={(e)=>props.setAge(e.target.value)}>
                {
                    props.Age.map((m)=><option value={m} key={m}>{m}+</option>)
                }
                </select>
        </div>
     );
}
 
export default Filters;
import React,{useState} from 'react';


const Filters = (props) => {
    return ( 
        <div className="filters">
                <select name="" id="" value={props.doseNumber} onChange={(e)=>props.setdoseNumber(e.target.value)}>
                {
                    props.Doses.map((m)=><option value={m} key={m}>{m}</option>)
                }
                </select>
                <select name="" id="" value={props.minAge} onChange={(e)=>props.setMinAge(e.target.value)}>
                {
                    props.Age.map((m)=><option value={m} key={m}>{m}+</option>)
                }
                </select>
        </div>
     );
}
 
export default Filters;
import React from 'react';
import Filters from './Filters';
import {Doses,Age,Vaccine} from '../Constants';
import TempDiv from './TempDiv';
import {Link} from "react-router-dom";

const ListByDate = ({pairedData,type}) => {
    pairedData.sort();
    return ( 
        <>
        {pairedData.length===0?(<h3>No centers Found</h3>):
        (<>
        <Filters Doses={Doses} Age={Age} Vaccine={Vaccine}/>
        <div className="list">

            {pairedData.map((m)=>{
                return (
                    m.value>0?(
                    <Link to={type===0?`/appointment/${m.key}`:`/appointmentPin/${m.key}`} >
                    <TempDiv 
                    date={m.key}
                    slots = {m.value} 
                    /></Link>):
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    (<a href='#' className="cursorDisabled">
                    <TempDiv 
                    date={m.key}
                    slots = {m.value} 
                    /></a>)
                )})
            }              
        </div></>)
        }
        </>
     );
}
 
export default ListByDate;
import React,{useState} from 'react';
import ListByDate from './ListByDate';
import {currentDate,makePairDates} from '../Constants';
import useFetch from '../Hooks/useFetch';



const Pincode = ({StateObject,pincode,setPincode}) => 
{
    const PinApi = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${currentDate()}`;
    const {data, error, loadingM} = useFetch(PinApi);
    console.log(data);
    const pairedData =  makePairDates(data,loadingM);

    return (
    <>  
    <div className="form-selection">
        <input type="text" value={pincode} placeholder="Enter Pincode.." onChange={(e)=>{setPincode(e.target.value)}}/>
    </div> 
    {error!==null?<h3>Enter a valid Pincode...</h3>:<>
            {loadingM===false?(
            <>
            <ListByDate pairedData={pairedData} type={1}/>
            </>):
            (<h3>Loading...</h3>)}
            </>
            }  
    </>
    );
}
 
export default Pincode;
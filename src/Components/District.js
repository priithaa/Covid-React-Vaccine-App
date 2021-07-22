import React from 'react';
import {currentDate,makePairDates} from '../Constants';
import useFetch from '../Hooks/useFetch';
import useFetchIds from '../Hooks/useFetchIds';
import ListByDate from './ListByDate';

const District = ({StateObject,stateID,setStateID,districtID,setDistrictID,age,setAge,dose,setDose}) => {

    // Fetching The data from the selected data
    const district = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtID}&date=${currentDate()}`;
    const {data, error, loadingM} = useFetch(district);
    if(loadingM!==true)
    console.log(data);
    // Pairing the datat by dates
    const pairedData =  makePairDates(data,loadingM,age,dose);

    // API to fetch the required Districts.
    const FetchDistrict = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateID}`;
    
    const{data1,err,loading} = useFetchIds(FetchDistrict,stateID);


    return ( 
        <>  {(error||err)&&<div className="form-selection"><h3>Some error occured, try again</h3></div>}
            {  pairedData!==null?(
            <>
                <div className="form-selection">
                <select value={stateID} onChange={(e)=>{setStateID(e.target.value)}}>
                {
                    StateObject.states.map((m)=><option value={m.state_id} key={m.state_id}>{m.state_name}</option>)
                }
                </select>

                <select value={districtID} onChange={(e)=>setDistrictID(e.target.value)}>Select The District
                    {!loading&&data1.districts.map((m)=><option value={m.district_id}> {m.district_name} </option>)}
                </select>
                </div>

                <ListByDate  pairedData={pairedData} type={0}
                age={age}
                setAge ={setAge}
                dose={dose}
                setDose={setDose}/>
            </>
                ):(<><h3>Loading...</h3></>)
            }
        </> 
     );
}
 
export default District;
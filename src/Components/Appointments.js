import React,{useState} from 'react';
import Filters from './Filters';
import Slots from './Slots';
import {Doses,Age,Vaccine} from '../Constants';
import {FaArrowLeft} from "react-icons/fa";
import {Link} from 'react-router-dom';
import useFetch from "../Hooks/useFetch";
import {useParams } from "react-router";
import {makeDate} from "../Constants";



const Appointments = ({districtID,stateID,age,setAge,dose,setDose}) => 
{   const {date} = useParams();
    const district = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtID}&date=${date}`;
    const {data, error, loadingM} = useFetch(district);
    const [search,setSearch]=useState('');

    const searchData = (sessions)=>
    {
        return sessions.filter((d)=>
            d.name.toLowerCase().indexOf(search.toLowerCase())>-1
        );
    }

    if(!loadingM){
        console.log(data);}
    
    return ( 
    <>
        {data!==null?<div>
            <div className="appointment-header">
                <Link to='/'><h3><i style={{'fontSize':15}}><FaArrowLeft/></i> District ID: {districtID}</h3></Link>       
                <h2>{makeDate(date)}</h2>
                <Filters Doses={Doses}
                Age = {Age}
                Vaccine = {Vaccine}
                age = {age}
                setAge={setAge}
                dose = {dose}
                setDose = {setDose}/>
            </div>
            {data['sessions'].length===0?<>The Slots filled up!! Sorry try again</>:
                <>
                <input type="text" value={search} placeholder="Search By hospital Name"
                onChange={(e)=>setSearch(e.target.value)} />
                
                <div className="aapointment-list">
                    {searchData(data['sessions']).map((m)=><Slots 
                    name={m.name}
                    pincode={m.pincode}
                    address={m.district_name}
                    min_age={m.min_age_limit}
                    vaccine={m.vaccine}
                    fee={m.fee}
                    capacity={m.available_capacity}
                    dose1={m.available_capacity_dose1}
                    dose2 = {m.available_capacity_dose2}
                    age={age}
                    dose = {dose}/>)}
                </div>
                </>
            }
        </div>:<div>Sorry No Slots Left</div>}
        
    </>
)} 

 
export default Appointments;
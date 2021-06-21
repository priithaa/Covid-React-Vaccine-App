import React,{useState} from 'react';
import Filters from './Filters';
import Slots from './Slots';
import {Doses,Age,Vaccine} from '../Constants';
import {Link} from 'react-router-dom';
import { FaArrowLeft,FaSearch } from "react-icons/fa";
import useFetch from '../Hooks/useFetch';
import {useParams } from "react-router";
import {makeDate} from "../Constants";
import { fdatasync } from 'fs';



const AppointmentsPin = (props) => {
    const {date} = useParams();
    const district = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${props.pincode}&date=${date}`;
    const {data, error, loadingM} = useFetch(district);
    const [search,setSearch]=useState('');
    const [doseNumber, setdoseNumber] = useState('Dose 1');
    const [minAge,setMinAge]=useState('18');

    const searchData = (sessions)=>
    {
        return sessions.filter((d)=>
            d.name.toLowerCase().indexOf(search.toLowerCase())>-1&&d.min_age_limit.toLowerCase().indexOf(minAge.toLowerCase())>-1
        );
    }

    if(!loadingM){
    console.log(data);}
    
    return ( 
    <>
        {data!==null?<div>
            <div className="appointment-header">
                <Link to='/'><h3><i style={{'fontSize':15}}><FaArrowLeft/></i> {props.pincode}</h3></Link>
                <h2>{makeDate(date)}</h2>       
                <Filters 
                Doses={Doses}
                Age = {Age}
                Vaccine = {Vaccine}
                doseNumber={doseNumber}
                setdoseNumber={setdoseNumber}
                minAge={minAge}
                setMinAge={setMinAge}
                />
            </div>
            {data['sessions'].length===0?<>The Slots filled up!! Sorry try again</>:
                <>
                <input type="text" value={search} placeholder="Search By hospital Name"
                onChange={(e)=>setSearch(e.target.value)} />
                
                <div className="aapointment-list">
                    {searchData(data['sessions']).map((m)=>
                    <Slots name={m.name}
                    pincode={m.pincode}
                    address={m.district_name}
                    min_age={m.min_age_limit}
                    vaccine={m.vaccine}
                    fee={m.fee}
                    capacity={m.available_capacity}/>)}
                </div>
                </>
            }
        </div>:<div>Sorry No Slots Left</div>}
        
    </>
        //  <>
    // <div className="appointment-header">

    //     <Link to='/'><h3>North Delhi by Pin</h3></Link>       
    //     <h2>21 June 2021</h2>
    //     <Filters Doses={Doses}
    //     Age = {Age}
    //     Vaccine = {Vaccine}/>
    // </div>
    // <input type="text" placeholder="Search By hospital Name" />
    // <div className="aapointment-list">
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>
    //     <Slots/>

    // </div>
    // </> 
    );
}
 
export default AppointmentsPin;
import React,{useState} from 'react';
import Appointments from './Components/Appointments';
import Form from './Components/Form';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import AppointmentsPin from './Components/AppointmentsPin';
import NotFound from './NotFound.js';

const Sidebox = () => {   
    
    const[districtID,setDistrictID] = useState(141);
    const [stateID,setStateID] = useState(9);
    const[pincode,setPincode] = useState('110078');
    const [type,setType] = useState(0);


    return ( 
        <div className="form-check">   
        <Router> 
            <Switch>       
                <Route exact path= '/'><Form 
                stateID={stateID}
                setStateID={setStateID}
                districtID={districtID} 
                setDistrictID={setDistrictID}
                pincode={pincode}
                setPincode={setPincode}
                type={type}
                setType={setType}
                /></Route>   
                <Route exact path='/appointment/:date'><Appointments 
                districtID={districtID} 
                stateID={stateID}/></Route>
                <Route exact path='/appointmentPin/:date'><AppointmentsPin pincode={pincode}/></Route>
                <Route path='/*'><NotFound/></Route>
            </Switch>
        </Router>   
        </div>    
        
     );
}
 
export default Sidebox;

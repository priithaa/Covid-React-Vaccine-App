import {makeDate} from '../Constants';

const TempDiv = ({date,slots}) =>
 {
    return ( 
    <>
     <div className="day-appointment" key = {date}>
                             <h3>{makeDate(date)}</h3>
                             <span>{slots} slots</span>
     </div>
    <div className="seperator"></div>
    </> );
}
 
export default TempDiv;
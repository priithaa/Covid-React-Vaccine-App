import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import BarChart from './Components/BarChart';

const ContentBox = () => {
    return ( 
        <div className="header">
            <h1>
                <ReactTypingEffect text={["Vaccination FAQs"]}/>
            </h1>
                <h2>Where can I get the vaccine from?</h2>
                <p>Vaccines are available from Government and Private Health Facilities as notified, known as COVID Vaccination Centres (CVCs).
                </p>
                <h2>How do I pre-register myself online for an appointment for vaccination?</h2>
                <p>
                Online registration and appointment can be done through Co-WIN portal.

                You will have to give some basic information about yourself and details of your photo identification card to get yourself registered online.

                From one mobile phone number, one can register 4 people, however, each person will need their own photo identification document.

                If Aadhar card is used as identification document, consent will be obtained and recorded.

                Through the portal, you can find out the list of available CVCs and dates and time of available vaccination slots, to book an appointment as per your choice. You will need an OTP verification prior to registration and a confirmation slip/token will be generated after registration. You will also get a confirmatory sms later.

                For all Private Hospitals, prior registration and appointment will be the only method of registration.

                </p>

                <h2>Will I get any certificate that I am vaccinated?</h2>
                <p>Yes, a provisional certificate would be provided after the first dose. On completion of second dose, when you receive the message for completion of schedule it would include a link to download digital certificate of vaccination for your perusal. This certificate can be then be saved in the digi-locker.</p>
                
               
                <br></br>

                <h2 className="chart-heading">
                    Indian Vaccination Stats as of today.
                </h2>
                <BarChart/>
           
        </div>
     );
}
 
export default ContentBox;
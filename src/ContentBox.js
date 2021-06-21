import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ContentBox = () => {
    return ( 
        <div className="header">
            <h1>
                <ReactTypingEffect text={["Vaccinate Yourself Today"]}/>
            </h1>
        </div>
     );
}
 
export default ContentBox;
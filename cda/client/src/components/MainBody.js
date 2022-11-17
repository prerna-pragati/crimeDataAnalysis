import React from 'react';
import './MainBody.css';


const Mainbody = (props) => {
  return (
    <div className="Mainbody">
        <img src={props.crimeImage} alt="crime" className="crimeImage" />
       
    </div>
  )
}

export default Mainbody;
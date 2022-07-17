import { format } from "date-fns";
import React, {useState} from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png'
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({date, setDate}) => {
    
  return (
    <div style={{background: `url(${bg})`}} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} className="max-w-sm ml-12 rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker
             mode="single"
             selected={date}
             onSelect={setDate}
          />
         
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

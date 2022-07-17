import React from "react";

const InfoCard = ({img, bgColor, cardTitle}) => {
  return (
    <div>
      <div className={`card lg:card-side ${bgColor}   shadow-xl`}>
        <figure className=" lg:pl-6">
          <img className="w-20 " src={img} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="">Click the button to listen on Spotiwhy app.</p>
          
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

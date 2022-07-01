import React from "react";

const Review = ({ review }) => {
  const { img, location, description,name } = review;
  return (
    <div className="card lg:max-w-lg bg-base-500 text-white shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex  items-center">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mt-5 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
          <div >
              <h3 className="text-xl text-cyan-400 font-medium">{name}</h3>
              <h5>{location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

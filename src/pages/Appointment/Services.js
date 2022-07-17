import React from "react";

const Services = ({ service, setTreatment }) => {
    const {slots,name, price} = service
  return (
    <div className="card lg:max-w-lg bg-base-400 shadow-xl">
      <div className="card-body ">
        <h2 className=" text-secondary font-bold text-2xl">{name}</h2>
        <p className="text-primary font-medium">
          {slots.length > 0 ? slots[0] : "Slots are not Available"}
        </p>
        <p className="text-primary font-base">
          {slots.length} :{" "}
          {slots.length > 0 ? "Spaces Available" : "Sorry...Try Next Day"}{" "}
        </p>
        <p>
          <small>Price : $ {price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-primary my-3"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";


const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
  const { name,  img, specialty } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
      
      </td>
    </tr>
  );
};

export default DoctorRow;

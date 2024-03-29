import React from "react";
import { toast } from "react-toastify";

const DeletingConfirmModal = ({ deletingDoctor,refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;

    
 const handleDelete = () =>{
    fetch(`https://doctor-server-side-six.vercel.app/doctor/${email}`,{
        method:"DELETE",
        headers:{
            authorization: `Bearar ${localStorage.getItem('accessToken')}`
        }
       
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            toast.success(`Doctor : ${name} saheb deleted done`)
                    setDeletingDoctor(null);
                    refetch()
            
        }
    })
 }
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
          <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
          <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingConfirmModal;

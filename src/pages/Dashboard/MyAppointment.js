import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {Link} from 'react-router-dom'

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        if(user){
            fetch(`https://mighty-spire-69340.herokuapp.com/booking?patient=${user.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearar ${localStorage.getItem('accessToken')}`
                }
            } )
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setAppointments(data))
        }
    },[user])

    return (
        <div>
        
        <h2>My Appointments: {appointments.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((a, index) => <tr  key={index}>
                            <td>{index + 1}</td>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                       
                                    </div>}
                                </td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyAppointment;
import { format } from 'date-fns';
import React, { useState } from 'react';
import {useQuery} from 'react-query'
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointment = ({date, setDate}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () =>  fetch(`https://doctor-server-side-six.vercel.app/available?date=${formattedDate}`).then(res => res.json()));

    if(isLoading){
      return <Loading></Loading>
    }
    // useEffect(() =>{
    //   fetch(`https://doctor-server-side-six.vercel.app/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
    return (
        <div className="text-center">
        <div className="py-6 mt-5">
          <h2 className="text-primary text-center text-3xl font-medium">
            Available appointment on : {format(date, "PP")}{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.map(service => <Services
           service={service}
           key={service._id}
           setTreatment={setTreatment}
          ></Services>)}
        </div>
        {treatment && <BookingModal refetch={refetch}  date={date} setTreatment={setTreatment}  treatment={treatment} key={treatment._id}></BookingModal>}
      </div>
    );
};

export default AvailableAppointment;
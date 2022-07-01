import React from "react";
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Review from "./Review";

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            description: " Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been theLorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            location: "California",
            img: person1  
        },
        {
            _id: 2,
            name: "Mia Malkova",
            description: " Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been theLorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            location: "California",
            img: person2  
        },
        {
            _id: 3,
            name: "Samanta Grey",
            description: " Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been theLorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            location: "California",
            img: person3  
        },
       
    ];
  return (
    <section className="mt-6">
      <div className="text-white flex justify-between">
        <div >
            <h2 className="text-2xl font-bold text-cyan-400 py-4">Testimonial</h2>
            <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div className="mt-8 lg:mt-0">
            <img className="w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {reviews.map(review => <Review review={review} key={review._id}></Review>)}
      </div>
    </section>
  );
};

export default Testimonial;

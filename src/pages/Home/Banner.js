import React from "react";
import chair from '../../assets/images/chair.png';
import bgBanner from '../../assets/images/bg.png'
import PrimaryBtn from "../Shared/PrimaryBtn";

const Banner = () => {
  return (
    <section style={{
      background:` URL(${bgBanner})`
    }} >
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse p-4">
          <img
            src={chair}
            className=" sm:max-w-xs lg:max-w-md rounded-lg shadow-2xl"
            alt="chair.png"
          />
          <div className="pr-10 text-white">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import appoinment from '../../assets/images/appointment.png'

const HomeContact = () => {
  return (
    <div style={{
        background: `url(${appoinment})`
    }} className="hero min-h-screen text-white my-6">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-cyan-400 pb-4">Contact Us</h1>
          <h3 className="text-4xl mb-4 ">Stay connected with us</h3>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;

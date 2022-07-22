import React from 'react';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from '../../hooks/useToken';
import Loading from "../Shared/Loading";

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    const [token] = useToken(user || gUser)

    const navigate = useNavigate();
  
  
    let signInError;
    if (error || gError || updateError) {
      signInError = (
        <p className="text-red-500">
          <small>{error?.message || gError?.message || updateError?.message}</small>
        </p>
      );
    }
  
    if(loading || gLoading || updating){
      return <Loading />
    }
  
    if (token) {
       navigate('/home')
      // console.log(user || gUser);
    }
  
    const onSubmit = async (data) =>{
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName : data.name });
        console.log('update done')
        };
    return (
        <div className="flex h-screen justify-center items-center ">
        <div className="card flex  w-96 bg-base-500 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Log in</h2>
    
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="test"
                  autoComplete="off"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Provide a at least6 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            {signInError}
            <p><small>Already have an account..?{" "}
                <span>
                  <Link className="text-primary" to="/login">
                    Pleas Sign in
                  </Link>
                </span></small></p>
           
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-primary"
            >
              Google log in
            </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;
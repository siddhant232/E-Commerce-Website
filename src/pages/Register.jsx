
import React from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { asyncsetuser } from '../store/UserAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Register = () => {
  const { register, handleSubmit, reset} = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const submithandler = (data)=>{
      data.id = nanoid();
      data.isAdmin = false;
      dispatch(asyncsetuser(data));
      toast.success("Registration Success");
      navigate('/login');
      reset();
    }
  
    return (
      <div className="min-h-full flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-10 transform transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)]">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6 shadow-inner">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Create Account</h2>
            <p className="text-gray-500 font-medium">Please fill in your details to register</p>
          </div>
  
          <form onSubmit={handleSubmit(submithandler)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="username">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input 
                  id="username"
                  type="text" 
                  placeholder="Choose a username"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 font-medium"
                  {...register("username")}
                />
              </div>
            </div>
  
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="password">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <input 
                  id="password"
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 font-medium"
                  {...register("password")}
                />
              </div>
            </div>
  
            <button 
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:scale-[0.98] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
            >
              Register
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
  
            <div className="text-center mt-6">
              <p className="text-gray-600 font-medium text-sm">
                Already have an account?{' '}
                <button 
                  type="button"
                  onClick={() => navigate("/login")} 
                  className="text-indigo-600 hover:text-purple-600 font-bold transition-colors focus:outline-none inline-flex items-center gap-1 group relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-purple-600 before:transition-all hover:before:w-full"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Register;
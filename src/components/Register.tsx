/** @format */

import logo from "../assets/image/logo1.png";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Register() {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    form,
    handleChange,
    handleRegister,
    isLoading,
    isError,
    error,
    isRegisterSuccess,
  } = useRegister();

  useEffect(() => {
    if (isRegisterSuccess) {
      navigate("/login");
    }
  }, [isRegisterSuccess]);

  return (
    <div
      className='flex items-center bg-cover bg-center flex-row justify-center gap-60 '
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661869085660-3252fcd3e505?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      <div className='w-1/3'>
        <img
          src={logo}
          alt='logo'
          className='w-auto h-96 object-cover'
        />
      </div>
      <div className='flex flex-col p-5  justify-center items-center bg-inherit h-1/2 w-1/4 rounded-lg '>
        <div className='flex w-full mb-4'>
          <h1
            className='text-3xl font-bold '
            style={{ textShadow: "2px 2px 4px white" }}>
            Register
          </h1>
        </div>
        <form
          action=''
          onSubmit={handleRegister}
          className='flex flex-col gap-5 w-full'>
          <div className='flex flex-col'>
            <label
              htmlFor='username'
              className='flex w-full text-white'>
              Username
            </label>
            <input
              type='text'
              placeholder='Username'
              name='fullName'
              value={form.fullName}
              className='w-full h-10 rounded-sm p-3'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col text-white'>
            <label htmlFor='password'>Email</label>
            <input
              type='email'
              placeholder='Email'
              className='w-full h-10 rounded-sm p-3 text-black'
              onChange={handleChange}
              name='email'
              value={form.email}
            />
          </div>
          <div className='flex flex-col text-white'>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type={show ? "text" : "password"}
              onChange={handleChange}
              value={form.password}
              placeholder='Password'
              className='w-full h-10 rounded-sm p-3 text-black'
            />
            <button
              className='h-4 size-12 cursor-pointer'
              onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
          {isError && <p className='text-red-500'>{error}</p>}
          <div className='flex flex-col'>
            {isLoading ? (
              <button
                className='bg-black text-white px-4 py-2 rounded-lg w-full '
                disabled={isLoading}>
                Loading
              </button>
            ) : (
              <button
                className='bg-black text-white px-4 py-2 rounded-lg w-full'
                disabled={isLoading}
                onClick={handleRegister}>
                Register
              </button>
            )}
            <h5 className='text-start text-white'>
              Don't have an account?{" "}
              <Link to='/login'>
                <u className='text-blue-300'>Login</u>
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
}

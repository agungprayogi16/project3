/** @format */

import logo from "../assets/image/logo1.png";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GoogleLoginButton from "./GoogleLoginButton";
// import FacebookLoginBUtton from "./FacebookLoginButton";

export default function Login() {
  const [show, setShow] = useState<boolean>(false);
  // const handleFacebookLogin = (response: any) => {
  //   // Tanggapan dari Facebook
  //   console.log(response);
  //   // Lakukan sesuatu setelah berhasil login
  // };

  const navigate = useNavigate();
  const {
    form,
    handleChange,
    handleLogin,
    isLoading,
    isError,
    error,
    isLoginSuccess,
  } = useLogin();

  useEffect(() => {
    if (isLoginSuccess) {
      navigate("/");
    }
  }, [isLoginSuccess]);

  return (
    <div
      className='flex items-center bg-cover bg-center flex-row justify-center gap-60  '
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
            Login
          </h1>
        </div>
        <form
          className='flex flex-col gap-5 w-full'
          onSubmit={handleLogin}>
          <div className='flex flex-col text-white'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name="emailOrUsername"
              placeholder='Email'
              value={form.emailOrUsername}
              onChange={handleChange}
              className='w-full h-10 rounded-sm p-3 text-black'
              required
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
              required
            />
            {show ? "Hide" : "Show"}
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
                onClick={handleLogin}>
                Login
              </button>
            )}
            <div className='flex flex-col w-full'>
              <div className='flex flex-col mt-2 w-full'>
                <div className='flex justify-center'>
                  <GoogleLoginButton />
                </div>
              </div>
            </div>
            {/* <div className='flex flex-col w-full'>
              <div className='flex flex-col mt-2 w-full'>
                <div className='flex justify-center'>
                  <FacebookLoginBUtton onLogin={handleFacebookLogin} />
                </div>
              </div>
            </div> */}
            <h5 className='text-start text-white'>
              Don't have an account?{" "}
              <Link to='/register'>
                <u className='text-blue-300'>Register</u>
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
}

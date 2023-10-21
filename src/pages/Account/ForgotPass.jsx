import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import forgotPassImg from '../../assets/images/forgot_password.svg'
import { auth } from '../../firebase';

export default function ForgotPass() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email Request to Reset Password has been sent");
    }
    catch(err) {
      toast.error(`${err}, Could not send reset password`);
    }
  }
  
  return (
    <section>
    <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
    <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
      <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
        <img
          src={forgotPassImg}
          alt="key"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
        <form onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Email address"
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray rounded transition ease-in-out"
          />

          <div className="flex justify-end whitespace-nowrap py-3  text-sm sm:text-lg">
            <p>
              Go back to&nbsp;
              <Link
                to="/signin"
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
              >
                Sign In
              </Link>
            </p>
          </div>
          <button
            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            type="submit"
          >
            Send reset password
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

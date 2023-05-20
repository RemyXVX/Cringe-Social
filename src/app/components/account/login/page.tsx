import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="sign_form">
        <form>
          <h1 className="text-3xl font-bold mb-6">Sign-In</h1>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button
            className="submit-button"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

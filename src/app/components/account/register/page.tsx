import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isEmailMatch, setIsEmailMatch] = useState(true);
  const [isPasswordStrong, setIsPasswordStrong] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailMatch(e.target.value === emailConfirm);
  };

  const handleEmailConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailConfirm(e.target.value);
    setIsEmailMatch(email === e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsPasswordStrong(e.target.value.length >= 8);
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
    setIsPasswordStrong(password.length >= 8 && password === e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmailMatch && isPasswordStrong) {
      console.log("Registration successful");
      // Perform registration logic here
    } else {
      console.log("Invalid email or weak password");
      // Display error message or take appropriate action
    }
  };

  return (
    <div className="">
      <div className="sign_form">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-6">Sign-Up</h1>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailMatch && <p className="error-message">Emails do not match</p>}
          <input
            type="email"
            placeholder="Confirm Email"
            className="input-field"
            value={emailConfirm}
            onChange={handleEmailConfirmChange}
          />
          {!isEmailMatch && <p className="error-message">Emails do not match</p>}
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isPasswordStrong && (
            <p className="error-message">Password must be at least 8 characters long</p>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          {!isPasswordStrong && (
            <p className="error-message">Password must be at least 8 characters long</p>
          )}
          <button
            className={`submit-button ${(!isEmailMatch || !isPasswordStrong) && 'disabled'}`}
            type="submit"
            disabled={!isEmailMatch || !isPasswordStrong}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

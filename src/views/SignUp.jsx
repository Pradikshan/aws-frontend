import React, { useState } from "react";
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-west-1_M6MvynQRS", // Replace with your Cognito User Pool ID
  ClientId: "6hep62fn6hsvjp1526vd9u1pd8", // Replace with your Cognito App Client ID
};
const userPool = new CognitoUserPool(poolData);

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    const attributeList = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
    ];

    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        setMessage(`Error: ${err.message || JSON.stringify(err)}`);
        return;
      }
      setMessage(
        "Sign-up successful! Please check your email for verification."
      );
    });
  };

  return (
    <div className="container text-white">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default SignUp;

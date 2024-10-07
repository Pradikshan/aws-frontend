import React, { useState } from "react";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";
import { Link } from "react-router-dom";

const poolData = {
  UserPoolId: "eu-west-1_pKISgVYlu",
  ClientId: "6sd5qel0768tt39pst5991pf23",
};
const userPool = new CognitoUserPool(poolData);

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  // Signup function
  const handleSignUp = (e) => {
    e.preventDefault();

    const attributeList = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
      new CognitoUserAttribute({ Name: "name", Value: name }),
      new CognitoUserAttribute({ Name: "address", Value: address }),
      new CognitoUserAttribute({ Name: "phone_number", Value: phoneNumber }),
      new CognitoUserAttribute({ Name: "custom:user_type", Value: "customer" }),
    ];

    console.log("Signing up user:", username);

    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        if (err.code === "UsernameExistsException") {
          setMessage("This username is already taken. Please choose another.");
        } else if (
          err.code === "InvalidParameterException" &&
          err.message.includes("email")
        ) {
          setMessage(
            "This email is already registered. Please use a different email."
          );
        } else {
          setMessage(`Error: ${err.message || JSON.stringify(err)}`);
        }
        console.error("Sign up error:", err);
        return;
      }

      console.log("Sign up result:", result);
      setMessage(
        "Sign-up successful! Please check your email for the confirmation code."
      );
      setIsSignedUp(true);
    });
  };

  const handleConfirmation = (e) => {
    e.preventDefault();

    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        setMessage(`Error: ${err.message || JSON.stringify(err)}`);
        return;
      }
      setMessage("Account confirmed successfully! You can now log in.");
    });
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center bg-gradient-to-r from-slate-500 to-slate-800 rounded-xl p-20">
        <h2 className="text-white mx-auto font-bold text-2xl mb-10">
          {!isSignedUp ? "Sign Up" : "Confirm Sign Up"}
        </h2>

        {!isSignedUp ? (
          <>
            <form className="mx-auto" onSubmit={handleSignUp}>
              <div className="form-group">
                <label className="text-white me-10">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="text-white me-10">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="text-white me-10">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-white me-10">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-white me-10">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-white me-10">Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="p-3 font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-xl hover:scale-110 transition-all ease-in-out duration-500 text-white"
              >
                Sign Up
              </button>
            </form>
            <a href="/login">
              <p className="text-center underline text-decoration-sky-500 mt-5 text-sky-400">
                Already have an account? Click here to login
              </p>
            </a>
          </>
        ) : (
          <>
            <form className="mx-auto" onSubmit={handleConfirmation}>
              <div className="form-group">
                <label className="text-white">Confirmation Code:</label>
                <input
                  type="text"
                  className="form-control"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="p-3 font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-xl hover:scale-110 transition-all ease-in-out duration-500 text-white"
              >
                Confirm
              </button>
            </form>
          </>
        )}
        {message && (
          <div className="alert alert-info mt-10 text-white">
            {message} <Link to={"/login"}>Click here!</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;

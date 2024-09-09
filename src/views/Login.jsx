import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const poolData = {
  UserPoolId: "eu-west-1_M6MvynQRS", // Replace with your Cognito User Pool ID
  ClientId: "6hep62fn6hsvjp1526vd9u1pd8", // Replace with your Cognito App Client ID
};
const userPool = new CognitoUserPool(poolData);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();

    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        setMessage("Login successful!");
        console.log("Login successful:", accessToken);

        // Redirect to /songs after successful login
        navigate("/songs"); // This will redirect the user to /songs
      },
      onFailure: (err) => {
        setMessage(`Login failed: ${err.message || JSON.stringify(err)}`);
      },
    });
  };

  return (
    <div className="mt-36 flex flex-col justify-center text-white">
      <h2 className="text-white mx-auto font-bold text-2xl mb-10">Login</h2>
      <form className="mx-auto" onSubmit={handleLogin}>
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
          <label className="text-white me-10">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="p-3 font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-xl hover:scale-110 transition-all ease-in-out duration-500 text-white"
        >
          Login
        </button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default Login;

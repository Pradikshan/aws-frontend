// import React, { useState, useContext } from "react";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
// import { CognitoUserPool } from "amazon-cognito-identity-js";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext"; // Import AuthContext

// const poolData = {
//   UserPoolId: "eu-west-1_M6MvynQRS",
//   ClientId: "6hep62fn6hsvjp1526vd9u1pd8",
// };
// const userPool = new CognitoUserPool(poolData);

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const authenticationData = {
//       Username: username,
//       Password: password,
//     };
//     const authenticationDetails = new AuthenticationDetails(authenticationData);

//     const userData = {
//       Username: username,
//       Pool: userPool,
//     };
//     const cognitoUser = new CognitoUser(userData);

//     cognitoUser.authenticateUser(authenticationDetails, {
//       onSuccess: (result) => {
//         const accessToken = result.getAccessToken().getJwtToken();
//         setMessage("Login successful!");
//         console.log("Login successful:", accessToken);

//         login(cognitoUser);

//         navigate("/songs");
//       },
//       onFailure: (err) => {
//         setMessage(`Login failed: ${err.message || JSON.stringify(err)}`);
//       },
//     });
//   };

//   return (
//     // <div className="mt-36 flex flex-col justify-center ">
//     <div className="fixed inset-0 bg-black flex items-center justify-center">
//       <div className="text-center bg-gradient-to-r from-slate-500 to-slate-800 rounded-xl p-20">
//         <h2 className="text-white font-bold text-2xl mb-10">Login</h2>
//         <form className="mx-auto" onSubmit={handleLogin}>
//           <div className="form-group mb-5">
//             <label className="text-white me-10">Username:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group mb-5">
//             <label className="text-white me-10">Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="p-3 font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-xl hover:scale-110 transition-all ease-in-out duration-500 text-white"
//           >
//             Login
//           </button>
//         </form>
//         <a href="/signup">
//           <p className="text-center underline text-decoration-sky-500 mt-5 text-sky-400">
//             Not signed up to DreamStreamer yet? Click here to Sign Up
//           </p>
//         </a>
//         {message && <div className="alert alert-info mt-3">{message}</div>}
//       </div>
//     </div>
//   );
// };

// export default Login;

//old code with client secret
// import React, { useState, useContext } from "react";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
// import { CognitoUserPool } from "amazon-cognito-identity-js";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext";
// import CryptoJS from "crypto-js"; // Import for Client Secret hash generation

// // Cognito User Pool configuration
// const poolData = {
//   UserPoolId: "eu-west-1_pKISgVYlu", // Replace with your Cognito User Pool ID
//   ClientId: "309jschpfuijq374nr5p9icug8", // Replace with your Cognito App Client ID
//   ClientSecret: "1lja75bliju4lhl7qkk2o8nm9n7m9vf7qtdlgoqn6e5fve4ga6e1", // Replace with your Client Secret
// };
// const userPool = new CognitoUserPool(poolData);

// // Function to generate secret hash
// const getSecretHash = (username, clientId, clientSecret) => {
//   return CryptoJS.HmacSHA256(username + clientId, clientSecret).toString(
//     CryptoJS.enc.Base64
//   );
// };

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Generating secret hash
//     const secretHash = getSecretHash(
//       username,
//       poolData.ClientId,
//       poolData.ClientSecret
//     );

//     const authenticationData = {
//       Username: username,
//       Password: password,
//       SecretHash: secretHash, // Include secret hash in authentication
//     };

//     const authenticationDetails = new AuthenticationDetails(authenticationData);

//     const userData = {
//       Username: username,
//       Pool: userPool,
//     };
//     const cognitoUser = new CognitoUser(userData);

//     cognitoUser.authenticateUser(authenticationDetails, {
//       onSuccess: (result) => {
//         const accessToken = result.getAccessToken().getJwtToken();
//         setMessage("Login successful!");
//         console.log("Login successful:", accessToken);

//         // Set user in context after successful login
//         login(cognitoUser);

//         navigate("/songs");
//       },
//       onFailure: (err) => {
//         setMessage(`Login failed: ${err.message || JSON.stringify(err)}`);
//       },
//     });
//   };

//   return (
//     <div className="fixed inset-0 bg-black flex items-center justify-center">
//       <div className="text-center bg-gradient-to-r from-slate-500 to-slate-800 rounded-xl p-20">
//         <h2 className="text-white font-bold text-2xl mb-10">Login</h2>
//         <form className="mx-auto" onSubmit={handleLogin}>
//           <div className="form-group mb-5">
//             <label className="text-white me-10">Username:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group mb-5">
//             <label className="text-white me-10">Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="p-3 font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-xl hover:scale-110 transition-all ease-in-out duration-500 text-white"
//           >
//             Login
//           </button>
//         </form>
//         <a href="/signup">
//           <p className="text-center underline text-decoration-sky-500 mt-5 text-sky-400">
//             Not signed up to DreamStreamer yet? Click here to Sign Up
//           </p>
//         </a>
//         {message && <div className="alert alert-info mt-3">{message}</div>}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const poolData = {
  UserPoolId: "eu-west-1_pKISgVYlu",
  ClientId: "6sd5qel0768tt39pst5991pf23",
};
const userPool = new CognitoUserPool(poolData);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

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

        // Set user in context after successful login
        login(cognitoUser);

        navigate("/songs");
      },
      onFailure: (err) => {
        setMessage(`Login failed: ${err.message || JSON.stringify(err)}`);
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center bg-gradient-to-r from-slate-500 to-slate-800 rounded-xl p-20">
        <h2 className="text-white font-bold text-2xl mb-10">Login</h2>
        <form className="mx-auto" onSubmit={handleLogin}>
          <div className="form-group mb-5">
            <label className="text-white me-10">Username:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-5">
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
        <a href="/signup">
          <p className="text-center underline text-decoration-sky-500 mt-5 text-sky-400">
            Not signed up to DreamStreamer yet? Click here to Sign Up
          </p>
        </a>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
    </div>
  );
};

export default Login;

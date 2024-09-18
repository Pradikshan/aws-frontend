// import React, { createContext, useState, useEffect } from "react";
// import { CognitoUserPool } from "amazon-cognito-identity-js";
// import { poolData } from "./config"; // Cognito User Pool Config

// const UserPool = new CognitoUserPool(poolData);
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [loading, setLoading] = useState(true); // New loading state

//   useEffect(() => {
//     const loggedInUser = UserPool.getCurrentUser();
//     if (loggedInUser) {
//       loggedInUser.getSession((err, session) => {
//         if (session && session.isValid()) {
//           setUser(loggedInUser);
//           loggedInUser.getUserAttributes((err, attributes) => {
//             if (err) {
//               console.error("Failed to get user attributes", err);
//             } else {
//               const emailAttr = attributes.find(
//                 (attr) => attr.Name === "email"
//               );
//               if (emailAttr) {
//                 setEmail(emailAttr.Value);
//               }
//             }
//           });
//         }
//         setLoading(false); // Set loading to false once session is checked
//       });
//     } else {
//       setLoading(false); // Set loading to false if no user is found
//     }
//   }, []);

//   const login = (user) => {
//     setUser(user);
//     user.getUserAttributes((err, attributes) => {
//       if (err) {
//         console.error("Failed to get user attributes", err);
//       } else {
//         const emailAttr = attributes.find((attr) => attr.Name === "email");
//         if (emailAttr) {
//           setEmail(emailAttr.Value);
//         }
//       }
//     });
//   };

//   const logout = () => {
//     const loggedInUser = UserPool.getCurrentUser();
//     if (loggedInUser) {
//       loggedInUser.signOut();
//       setUser(null);
//       setEmail(null);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, email, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// this works
// import React, { createContext, useState, useEffect } from "react";
// import { CognitoUserPool } from "amazon-cognito-identity-js";
// import { poolData } from "./config"; // Cognito User Pool Config

// // Initialize the User Pool with the poolData (App Client Secret is configured in AWS)
// const UserPool = new CognitoUserPool(poolData);

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [userType, setUserType] = useState(null); // Store user_type
//   const [loading, setLoading] = useState(true); // Loading state

//   // Function to handle session and retrieve user attributes
//   useEffect(() => {
//     const loggedInUser = UserPool.getCurrentUser();
//     if (loggedInUser) {
//       loggedInUser.getSession((err, session) => {
//         if (session && session.isValid()) {
//           setUser(loggedInUser);
//           loggedInUser.getUserAttributes((err, attributes) => {
//             if (err) {
//               console.error("Failed to get user attributes", err);
//             } else {
//               const emailAttr = attributes.find(
//                 (attr) => attr.Name === "email"
//               );
//               const userTypeAttr = attributes.find(
//                 (attr) => attr.Name === "custom:user_type"
//               );

//               if (emailAttr) {
//                 setEmail(emailAttr.Value);
//               }
//               if (userTypeAttr) {
//                 setUserType(userTypeAttr.Value); // Fetch and set user_type
//               }
//             }
//           });
//         }
//         setLoading(false); // Loading state set to false once session is checked
//       });
//     } else {
//       setLoading(false); // Set loading to false if no user is found
//     }
//   }, []);

//   // Function to handle login and fetch attributes
//   const login = (user) => {
//     setUser(user);
//     user.getUserAttributes((err, attributes) => {
//       if (err) {
//         console.error("Failed to get user attributes", err);
//       } else {
//         const emailAttr = attributes.find((attr) => attr.Name === "email");
//         const userTypeAttr = attributes.find(
//           (attr) => attr.Name === "custom:user_type"
//         );

//         if (emailAttr) {
//           setEmail(emailAttr.Value);
//         }
//         if (userTypeAttr) {
//           setUserType(userTypeAttr.Value); // Set user_type during login
//         }
//       }
//     });
//   };

//   // Function to handle logout
//   const logout = () => {
//     const loggedInUser = UserPool.getCurrentUser();
//     if (loggedInUser) {
//       loggedInUser.signOut();
//       setUser(null);
//       setEmail(null);
//       setUserType(null); // Clear userType on logout
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, email, userType, login, logout, loading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { poolData } from "./config"; // Cognito User Pool Config

// Initialize the User Pool with the poolData
const UserPool = new CognitoUserPool(poolData);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null); // Store username
  const [userType, setUserType] = useState(null); // Store user_type
  const [loading, setLoading] = useState(true); // Loading state

  // Function to handle session and retrieve user attributes
  useEffect(() => {
    const loggedInUser = UserPool.getCurrentUser();
    if (loggedInUser) {
      loggedInUser.getSession((err, session) => {
        if (session && session.isValid()) {
          setUser(loggedInUser);
          setUsername(loggedInUser.getUsername()); // Set the username from the session

          // Retrieve other attributes like email and custom user_type
          loggedInUser.getUserAttributes((err, attributes) => {
            if (err) {
              console.error("Failed to get user attributes", err);
            } else {
              const emailAttr = attributes.find(
                (attr) => attr.Name === "email"
              );
              const userTypeAttr = attributes.find(
                (attr) => attr.Name === "custom:user_type"
              );

              if (emailAttr) {
                setEmail(emailAttr.Value);
              }
              if (userTypeAttr) {
                setUserType(userTypeAttr.Value); // Fetch and set user_type
              }
            }
          });
        }
        setLoading(false); // Set loading to false once session is checked
      });
    } else {
      setLoading(false); // Set loading to false if no user is found
    }
  }, []);

  // Function to handle login and fetch attributes
  const login = (user) => {
    setUser(user);
    setUsername(user.getUsername()); // Set username on login

    user.getUserAttributes((err, attributes) => {
      if (err) {
        console.error("Failed to get user attributes", err);
      } else {
        const emailAttr = attributes.find((attr) => attr.Name === "email");
        const userTypeAttr = attributes.find(
          (attr) => attr.Name === "custom:user_type"
        );

        if (emailAttr) {
          setEmail(emailAttr.Value);
        }
        if (userTypeAttr) {
          setUserType(userTypeAttr.Value); // Set user_type during login
        }
      }
    });
  };

  // Function to handle logout
  const logout = () => {
    const loggedInUser = UserPool.getCurrentUser();
    if (loggedInUser) {
      loggedInUser.signOut();
      setUser(null);
      setEmail(null);
      setUsername(null);
      setUserType(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, username, email, userType, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

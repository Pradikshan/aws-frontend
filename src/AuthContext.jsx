import React, { createContext, useState, useEffect } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { poolData } from "./config"; // Cognito User Pool Config

const UserPool = new CognitoUserPool(poolData);
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null); // State for storing email

  useEffect(() => {
    const loggedInUser = UserPool.getCurrentUser();
    if (loggedInUser) {
      loggedInUser.getSession((err, session) => {
        if (session && session.isValid()) {
          setUser(loggedInUser);
          // Fetch and set user attributes, including email
          loggedInUser.getUserAttributes((err, attributes) => {
            if (err) {
              console.error("Failed to get user attributes", err);
            } else {
              const emailAttr = attributes.find(
                (attr) => attr.Name === "email"
              );
              if (emailAttr) {
                setEmail(emailAttr.Value); // Set email
              }
            }
          });
        }
      });
    }
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    const loggedInUser = UserPool.getCurrentUser();
    if (loggedInUser) {
      loggedInUser.signOut();
      setUser(null);
      setEmail(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

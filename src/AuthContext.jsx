import React, { createContext, useState, useEffect } from "react";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { poolData } from "./config"; // This imports the Cognito configuration

const UserPool = new CognitoUserPool(poolData);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in when the app loads
  useEffect(() => {
    const loggedInUser = UserPool.getCurrentUser();
    if (loggedInUser) {
      loggedInUser.getSession((err, session) => {
        if (session && session.isValid()) {
          setUser(loggedInUser);
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
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

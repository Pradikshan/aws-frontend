import React, { createContext, useState, useEffect } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { poolData } from "./config"; // Cognito User Pool Config

const UserPool = new CognitoUserPool(poolData);
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const loggedInUser = UserPool.getCurrentUser();
    if (loggedInUser) {
      loggedInUser.getSession((err, session) => {
        if (session && session.isValid()) {
          setUser(loggedInUser);
          loggedInUser.getUserAttributes((err, attributes) => {
            if (err) {
              console.error("Failed to get user attributes", err);
            } else {
              const emailAttr = attributes.find(
                (attr) => attr.Name === "email"
              );
              if (emailAttr) {
                setEmail(emailAttr.Value);
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

  const login = (user) => {
    setUser(user);
    user.getUserAttributes((err, attributes) => {
      if (err) {
        console.error("Failed to get user attributes", err);
      } else {
        const emailAttr = attributes.find((attr) => attr.Name === "email");
        if (emailAttr) {
          setEmail(emailAttr.Value);
        }
      }
    });
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
    <AuthContext.Provider value={{ user, email, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

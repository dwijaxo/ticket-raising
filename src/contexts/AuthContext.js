import React, { useState, useEffect, useContext, createContext } from "react";
import { FirebaseContext } from "./FirebaseContext";

const AuthContext = createContext();


export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}


export const useAuth = () => {
  return useContext(AuthContext);
};


function useProvideAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { firebase } = useContext(FirebaseContext);

  const signin = ({ email, password, callback }) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        callback();
        return response.user;
      });
  };

  const signup = ({ email, password, callback }) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        callback();
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };


  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [firebase]);


  
  return {
    isLoading,
    user,
    signin,
    signup,
    signout
  };
}

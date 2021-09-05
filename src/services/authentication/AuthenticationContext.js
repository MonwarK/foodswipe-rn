import React, { createContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { register, signIn } from './AuthenticationService';
import * as firebase from "firebase";

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState(null);
  const [isAppLoading, setIsAppLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const onLogin = (email, password) => {
    setIsLoading(true)
    signIn(email, password)
      .then((user) => {
        setIsLoading(false)
        setUser(user)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err.toString());
      })
  }

  const onRegister = (email, password, repeatPassword) => {
    setIsLoading(true)
    if (password !== repeatPassword) {
      setIsLoading(false)
      setError("Passwords do not match");
    }
    else {
      register(email, password)
        .then((u) => {
          setIsLoading(false)
          setUser(u)
        })
        .catch((e) => {
          setIsLoading(false)
          setError(e.toString())
        })
    }
  }

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  }

  useEffect(() => {
    setIsAppLoading(true)
    firebase
      .auth()
      .onAuthStateChanged((auth) => {
        if (auth) {
          setUser(auth)
        }
      })
    setTimeout(() => {
      setIsAppLoading(false)
    }, 5000)
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        error,
        isLoading,
        isAppLoading,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

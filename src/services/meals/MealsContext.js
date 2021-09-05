import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { retrieveMeals } from './MealsService';
import * as firebase from "firebase";
import { AuthenticationContext } from '../authentication/AuthenticationContext';

export const MealsContext = createContext();

export const MealsContextProvider = ({ children }) => {
  const [meals, setMeals] = useState(null);
  const [savedList, setSavedList] = useState([]);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user?.uid?.length > 0){
      firebase
      .firestore()
      .collection("meals")
      .onSnapshot(snapshot =>
        setMeals(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        )  
      )

    firebase
      .firestore()
      .collection("saved")
      .where("uid", "==", user.uid)
      .onSnapshot(snapshot =>
        setSavedList(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        )  
      )
    }
  }, [user])

  const onSave = (index) => {
    const alreadyExists = savedList.find((item) => item.foodId === meals[index].id)

    if (!alreadyExists){
      firebase
        .firestore()
        .collection("saved")
        .add({
          foodId: meals[index].id,
          imageUrl: meals[index].imageUrl,
          name: meals[index].name,
          uid: user.uid
        })
    }
  } 

  return (
    <MealsContext.Provider
      value={{
        meals,
        savedList,
        onSave
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}

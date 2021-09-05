import * as firebase from "firebase";

export const retrieveMeals = () => {

  return new Promise((resolve, reject) => {
    const meals = "f";
    
    if (!meals) {
      reject("no meals found")
    }

    resolve(meals)
  })
}
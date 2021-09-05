import * as firebase from "firebase";

export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

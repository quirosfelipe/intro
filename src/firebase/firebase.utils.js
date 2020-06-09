import firebase from "firebase/app"; // firebase gives access to all utilities library, only need now app
import "firebase/firestore"; // for the database
import "firebase/auth"; // for the auth

const config = {
  apiKey: "AIzaSyDR4ccDL346cnkhU1XNrA7avPH9JlV-pHI",
  authDomain: "intro-dd454.firebaseapp.com",
  databaseURL: "https://intro-dd454.firebaseio.com",
  projectId: "intro-dd454",
  storageBucket: "intro-dd454.appspot.com",
  messagingSenderId: "534748501415",
  appId: "1:534748501415:web:247c1a96929f04d3a11282",
  measurementId: "G-Y70P986VSN",
};

firebase.initializeApp(config);
// STORE DATA IN DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // return if there is not user logged

  const userRef = firestore.doc(`users/${userAuth.uid}`); // users backend route
  const snapShot = await userRef.get(); // requests info of user from firebase

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        // create user in firebase
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef; // returns info of logged user
};

export const auth = firebase.auth(); // export the auth method on firebase
export const firestore = firebase.firestore(); // export the firestore

const provider = new firebase.auth.GoogleAuthProvider(); // gives access to google auth provider class from the authentication library
provider.setCustomParameters({ prompt: "select_account" }); // triggers the google pop up when using the GAP
export const signInWithGoogle = () => auth.signInWithPopup(provider); // takes the passed provider, in this case google

export default firebase;

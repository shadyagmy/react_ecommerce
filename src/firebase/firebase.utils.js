import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDcE9ipQp6yyZMGUkStelN4aDyxGo1r7nY",
    authDomain: "crwn-db-3112a.firebaseapp.com",
    databaseURL: "https://crwn-db-3112a.firebaseio.com",
    projectId: "crwn-db-3112a",
    storageBucket: "crwn-db-3112a.appspot.com",
    messagingSenderId: "284555138096",
    appId: "1:284555138096:web:71d71b38cd7a79289f09f5",
    measurementId: "G-KW9S5LR8GR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })

        } catch (error) {
            console.log("error creating user ", error.message )
        }
    }

    return userRef
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
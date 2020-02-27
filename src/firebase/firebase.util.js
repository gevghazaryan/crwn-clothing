import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBU_LiBreolDI7NxWQCU90paGKzB53Ptd4",
    authDomain: "crwn-dbgev.firebaseapp.com",
    databaseURL: "https://crwn-dbgev.firebaseio.com",
    projectId: "crwn-dbgev",
    storageBucket: "crwn-dbgev.appspot.com",
    messagingSenderId: "268569895242",
    appId: "1:268569895242:web:095bf3b0b52a2cc60de1b3",
    measurementId: "G-7YHBH61298"
};


export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => (auth.signInWithPopup(provider));

export default firebase
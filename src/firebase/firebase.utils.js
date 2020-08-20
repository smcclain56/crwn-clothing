import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIyXEsfaFLv9A3o_cG-lvKSWj4zb1GgCo",
    authDomain: "crwn-db-34bdb.firebaseapp.com",
    databaseURL: "https://crwn-db-34bdb.firebaseio.com",
    projectId: "crwn-db-34bdb",
    storageBucket: "crwn-db-34bdb.appspot.com",
    messagingSenderId: "584204723333",
    appId: "1:584204723333:web:11dce6a8ab4e11664375ec",
    measurementId: "G-0064GSB49J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
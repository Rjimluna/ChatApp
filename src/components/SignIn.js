import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase-config'

function SignIn() {

    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }

    return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
    )
}

export default SignIn;
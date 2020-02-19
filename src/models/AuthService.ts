import { firebaseAuth } from "../firebase"

export const doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    firebaseAuth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email: string, password: string) =>
    firebaseAuth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => firebaseAuth.signOut();

export const doPasswordReset = (email: string) => firebaseAuth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password: string) => {
    if (firebaseAuth.currentUser != null) {
        firebaseAuth.currentUser.updatePassword(password);
    } else {
        //TODO: If not logged in, throw an error?
    }
}
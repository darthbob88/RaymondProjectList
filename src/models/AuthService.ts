import { firebaseAuth } from "../firebase"

export const doCreateUserWithEmailAndPassword = (email: string, password: string, userName: string) =>
    firebaseAuth.createUserWithEmailAndPassword(email, password).then(result => {
        if (result.user == null) return false
        result.user.updateProfile({
            displayName: userName
        }).catch(function (error) {
            console.log(error);
        })
    });

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

export const setDisplayName = (userName: string) => {
    if (firebaseAuth.currentUser != null) {
        firebaseAuth.currentUser.updateProfile({ displayName: userName }).then(() => console.log("Successfully set displayName"))

    }
}
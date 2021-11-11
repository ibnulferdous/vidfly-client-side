import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // Registration with email and password
    const registerWithEmail = (email, password, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));

    }

    // Log in with email and password
    const logInWithEmail = (email, password ) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    // Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });

        return () => unsubscribe;
    }, []);

    // Log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
    }




    return {
        user,
        setUser,
        isLoading,
        authError,
        registerWithEmail,
        logInWithEmail,
        logOut
    }

}

export default useFirebase;
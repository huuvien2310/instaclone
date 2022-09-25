import { useMutation } from "@apollo/react-hooks";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import defaultUserImage from "./images/default-user-image.jpg";
import React, { useState, useEffect } from "react";
import { CREATE_USER } from "./graphql/mutations";

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp({
  apiKey: "AIzaSyD3SyJMoDWMLdcZzUpxBfLYSA3tBr_gm0k",
  authDomain: "react-51624.firebaseapp.com",
  projectId: "react-51624",
  storageBucket: "react-51624.appspot.com",
  messagingSenderId: "648210612646",
  appId: "1:648210612646:web:8375ae539537c5db2dcf67",
  measurementId: "G-HRD7Z7FT8V",
});

interface AuthContextProps {
  authState: any;
  signInWithGoogle: () => void;
  signUpWithEmailAndPassword: (formData: any) => void;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextProps | null>(null);

function AuthProvider({ children }: any) {
  const [authState, setAuthState] = useState({ status: "loading" });
  const [createUser] = useMutation(CREATE_USER);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          //@ts-ignore
          setAuthState({ status: "in", user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref("metadata/" + user.uid + "/refreshTime");

          metadataRef.on("value", async (data) => {
            if (!data.exists) return;
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            //@ts-ignore
            setAuthState({ status: "in", user, token });
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  async function signUpWithEmailAndPassword(formData: any) {
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password);
    //@ts-ignore
    if (data.additionalUserInfo.isNewUser) {
      const variables = {
        // @ts-ignore
        userId: data.user.uid,
        name: formData.name,
        username: formData.username,
        // @ts-ignore
        email: data.user.email,
        bio: "",
        website: "",
        phoneNumber: "",
        profileImage: defaultUserImage,
      };
      await createUser({ variables });
    }
  }

  const signOut = async () => {
    try {
      setAuthState({ status: "loading" });
      await firebase.auth().signOut();
      setAuthState({ status: "out" });
    } catch (error) {
      console.log(error);
    }
  };

  if (authState.status === "loading") {
    return null;
  } else {
    return (
      <AuthContext.Provider
        value={{
          authState,
          signInWithGoogle,
          signUpWithEmailAndPassword,
          // logInWithEmailAndPassword,
          signOut,
          // updateEmail,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;

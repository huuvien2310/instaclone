import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "./graphql/mutations";
import defaultUserImage from "./images/default-user-image.jpg";

const firebaseConfig = {
  apiKey: "AIzaSyD3SyJMoDWMLdcZzUpxBfLYSA3tBr_gm0k",
  authDomain: "react-51624.firebaseapp.com",
  projectId: "react-51624",
  storageBucket: "react-51624.appspot.com",
  messagingSenderId: "648210612646",
  appId: "1:648210612646:web:8375ae539537c5db2dcf67",
  measurementId: "G-HRD7Z7FT8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

interface AuthContextProps {
  signUpWithEmailAndPassword: (formData: any) => void;
}

const AuthContext = React.createContext<AuthContextProps | null>(null);

export function UserAuth() {
  return React.useContext(AuthContext);
}

export default function AuthContextProvider({ children }: any) {
  const [authState, setAuthState] = React.useState({ status: "loading" });
  const [createUser] = useMutation(CREATE_USER);

  console.log(authState);
  React.useEffect(() => {
    return auth.onAuthStateChanged(async (user: any) => {
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
          const metadataRef = ref(
            database,
            "metadata/" + user.uid + "/refreshTime"
          );

          onValue(metadataRef, async (data: any) => {
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

  async function signUpWithEmailAndPassword(formData: any) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const variables = {
        userId: userCredential.user.uid,
        name: formData.name,
        username: formData.username,
        email: userCredential.user.email,
        bio: "",
        website: "",
        phoneNumber: "",
        profileImage: defaultUserImage,
      };

      await createUser({ variables });
    } catch (error) {
      console.log(error);
    }
  }

  if (authState.status === "loading") {
    return null;
  } else {
    return (
      <AuthContext.Provider
        value={{
          signUpWithEmailAndPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

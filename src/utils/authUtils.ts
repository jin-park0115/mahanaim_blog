import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useAuthStore } from "@/store/authStore";

export const handleFirebaseAuth = async (
  type: "signup" | "login",
  email: string,
  password: string
): Promise<UserCredential> => {
  let userCredential;

  if (type === "signup") {
    userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } else {
    userCredential = await signInWithEmailAndPassword(auth, email, password);
  }

  const user = userCredential.user;
  if (user) {
    const token = await user.getIdToken();
    useAuthStore.getState().setToken(token);
  }
  return userCredential;
};

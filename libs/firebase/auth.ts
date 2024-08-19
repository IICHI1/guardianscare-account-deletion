import { signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { auth } from './config';

export const signInWithGoogle = async (): Promise<User | null> => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);

    return user;
  } catch (error) {
    console.error('Error during sign-in:', error);

    return null;
  }
};

export const signOutWithGoogle = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error during sign-out:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

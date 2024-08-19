import React from 'react';
import { Button } from "@/components/ui/button";

import { getAuth, deleteUser, signOut } from 'firebase/auth';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

async function deleteAccount() {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getFirestore();

      await deleteDoc(doc(db, "users", user.uid));

      await deleteUser(user);

      await signOut(auth);
    } else {
      console.error("No user is currently signed in.");
    }
  } catch (e) {
    console.error("Failed to delete account: ", e);
  }
}

interface SignInProps {
  handleSignIn: () => void;
}

interface SignOutProps {
  handleSignOut: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ handleSignIn }) => {
  return (
    <form
      action={async () => {
        handleSignIn();
      }}
    >
      <Button>Sign In</Button>
    </form>
  )
}

export const DeleteAccount: React.FC<SignOutProps> = ({ handleSignOut }) => {
  return (
    <form
      action={async () => {
        await deleteAccount();

        handleSignOut();
      }}
      className="w-full"
    >
      <Button variant="secondary" className="w-full p-0 bg-red-200 hover:bg-red-500">
        Delete My Account !!
      </Button>
    </form>
  )
}

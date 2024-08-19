'use client';

import { useState } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { signInWithGoogle, signOutWithGoogle } from '@/libs/firebase/auth';

import { User } from 'firebase/auth';
import { DeleteAccount, SignIn } from '@/components/auth-components';


export default function UserButton() {
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = async () => {
    try {
      const signedInUser = await signInWithGoogle();

      setUser(signedInUser);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutWithGoogle();

      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) return <SignIn handleSignIn={handleSignIn} />;

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white text-sm shadow-sm hover:bg-gray-50 transition"
          >
            <Avatar className="w-7 h-7 rounded-full">
              <AvatarImage
                src={
                  user.photoURL ?? "https://source.boringavatars.com/marble/120"
                }
                alt={user.displayName ?? ""}
              />
            </Avatar>
            <span className="hidden sm:inline-flex">{user.email}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" /> {/* Dropdown icon */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.displayName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <DeleteAccount handleSignOut={handleSignOut} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

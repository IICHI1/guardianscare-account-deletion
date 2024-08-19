import CustomLink from "@/components/custom-link";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/user-button";

import Image from "next/image";

export default async function Index() {
  return (
    <div className="flex flex-col gap-8 text-center p-4 sm:p-8">
      <Button variant="ghost" className="p-0 mx-auto">
        <Image
          src="https://i.ibb.co/NTDCbX1/auth.png"
          alt="Auth"
          width="50"
          height="50"
          className="min-w-8"
        />
      </Button>

      <div className="max-w-md sm:max-w-xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            We&apos;re Sorry to See You Go!
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            To delete your GuardiansCare account, please sign in below. This will permanently remove your profile, chat history, and personalized video recommendations from our database. This action is irreversible.
          </p>
        </div>

        <div className="text-center mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            We&apos;ve loved having you with us and hope to welcome you back in the future.
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-800 font-medium">
            Sign in below to continue with the deletion process.
          </p>
        </div>
      </div>


      <div className="mx-auto mt-4 sm:mt-2">
        <UserButton />
      </div>
    </div>
  );
}
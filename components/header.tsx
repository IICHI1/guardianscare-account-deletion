import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex items-center justify-center w-full h-16 gap-6 max-w-3xl px-4 mx-auto sm:px-6">
        {/* Website is External Source to delete the google account from the GuardiansCare Database. */}
        {/* <MainNav /> */}
        {/* <UserButton /> */}
        <Image
          src="/logo.png"
          alt="Logo"
          width="30"
          height="30"
          className="min-w-8"
        />
        <div className="text-lg font-medium">
          Guardians Care - Account Deletion
        </div>
      </div>
    </header>
  )
}

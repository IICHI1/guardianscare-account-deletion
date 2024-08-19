import CustomLink from "./custom-link"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 px-4 py-4 w-full text-sm sm:flex-row sm:px-6 sm:py-8">
      <span className="text-center sm:text-left">
        © 2024{" "}
        <CustomLink href="https://childrenofindia.in" className="font-medium hover:underline">
          www.childrenofindia.in
        </CustomLink>
      </span>
      <span className="text-center sm:text-left">
        All rights reserved.
      </span>
    </footer>
  )
}

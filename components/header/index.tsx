import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex bg-background sticky top-0 items-center h-12 p-4 border-b">
      <div className="flex items-center gap-4 lg:gap-8">
        <Link className="text-xl font-extrabold tracking-tighter" href="/">
          VMS
        </Link>
      </div>
      <nav className="ml-auto flex items-center gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}

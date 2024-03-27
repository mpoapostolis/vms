import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ClerkProvider, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignInUrl="/" afterSignUpUrl="/">
      <html lang="en" className={GeistSans.className}>
        <body className="bg-background text-foreground">
          <Header />
          <div className="min-h-screen flex h-full">
            <Sidebar />
            <main className="p-4">{children}</main>
          </div>
        </body>
      </html>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

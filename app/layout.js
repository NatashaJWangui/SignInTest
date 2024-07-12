import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const RobotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  
  title: "Rider App",
  description: "Generated by Bit Byte Savvy Tech",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang='en'>
      <body className={RobotoSlab.className}>
        <Header/>
        {children}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        </SignedIn>
      </body>
    </html>
  </ClerkProvider>
  );
}

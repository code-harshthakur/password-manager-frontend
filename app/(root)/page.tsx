/*-------------------------------------------Home Page------------------------------------------------------*/
"use server";
import { Banner, Button } from "flowbite-react";
import { FaSun } from "react-icons/fa"; // Import the sun icon from react-icons library
import Link from "next/link";
import HeaderComponent from "@/components/header";

export default async function Home() {
  return (
    <>
      {/* Header */}
      <HeaderComponent />
      {/* Main Section */}
      <div className="flex items-center justify-center mt-14">
        <main className="flex-1 items-center justify-center p-4 text-center lg:p-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-600">
                <h1>Manage Your Passwords Securely</h1>
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-teal-700 dark:text-teal-700">
                Store and access your passwords with ease while keeping them
                secure.
              </p>
            </div>
            <div className="flex flex-col gap-2 mx-auto max-w-sm">
              <Button type="submit" href="/add">
                Add Password
              </Button>
              <Button type="submit" href="/search">
                Search Password
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

/*-------------------------------------------Home Page------------------------------------------------------*/
import { Banner, Button } from "flowbite-react";
import { FaSun } from "react-icons/fa"; // Import the sun icon from react-icons library
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header>
        <Banner>
          <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
            <div className="mx-auto flex items-center">
              <h1 className="flex items-center justify-center text-3xl font-bold text-teal-700 dark:text-teal-400">
                Task Manager
              </h1>
            </div>
            <div className="flex items-center">
              <FaSun className="text-tean-500" size={24} /> {/* Add the sun icon */}
            </div>
          </div>
        </Banner>
      </header>
      {/* Main Section */}
      <main className="flex-1 items-center justify-center p-4 text-center lg:p-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-600">
              <h1>
                Manage Your Passwords Securely
              </h1>
            </span>
          </div>
          <div className="space-y-4">
            <p className="text-teal-700 dark:text-teal-700">
              Store and access your passwords with ease while keeping them secure.
            </p>
          </div>
          <div className="flex flex-col gap-2 mx-auto max-w-sm">
            <Button type="submit">Add Password</Button>
            <Button type="submit">Search Password</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

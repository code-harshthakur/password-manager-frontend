import React from "react";
import { Checkbox, TextInput, Label, Button, Banner } from "flowbite-react";
import { FaSun } from "react-icons/fa";
import Link from "next/link";
import HeaderComponent from "@/components/header";

const AddPage = (): JSX.Element => {
  return (
    <>
      {/* Header */}
      <HeaderComponent />
      {/* Main Content */}
      <div className="flex h-screen justify-center items-center">
        <form className="w-full max-w-md flex flex-col gap-4 p-4 bg-white rounded-lg shadow">
          <div>
            <Label htmlFor="label">Label</Label>
            <TextInput
              id="label"
              name="label"
              type="text"
              placeholder="Your unique label"
              required
              shadow
            />
          </div>
          <div>
            <Label htmlFor="username">Your Username</Label>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="name@xyz.com"
              required
              shadow
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              shadow
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" name="agree" />
            <Label htmlFor="agree">
              I agree with the&nbsp;
              <Link href="#">
                <p className="text-cyan-600 hover:underline dark:text-cyan-500">
                  terms and conditions
                </p>
              </Link>
            </Label>
          </div>
          <Button type="submit">Add the information</Button>
        </form>
      </div>
    </>
  );
};

export default AddPage;

/* ---------------------------------------- Add Page ------------------------------------------------ */
"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, TextInput, Label, Button, Banner } from "flowbite-react";
import { FaSun } from "react-icons/fa";
import Link from "next/link";
import HeaderComponent from "@/components/header";

const AddPage = (): JSX.Element => {
  const [label, setLabel] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = { label, username, password };
    try {
      const result = await addData(input);
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addData = async (data: {
    label: string;
    username: string;
    password: string;
  }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  return (
    <>
      {/* Header */}
      <HeaderComponent />
      {/* Main Content */}
      <div className="flex h-screen justify-center items-center">
        <form
          className="w-full max-w-md flex flex-col gap-4 p-4 bg-white rounded-lg shadow"
          onSubmit={handleSubmit}
        >
          <div>
            <Label htmlFor="label">Label</Label>
            <TextInput
              id="label"
              name="label"
              type="text"
              placeholder="Your unique label"
              value={label}
              required
              shadow
              onChange={handleLabel}
            />
          </div>
          <div>
            <Label htmlFor="username">Your Username</Label>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="name@xyz.com"
              value={username}
              required
              shadow
              onChange={handleUsername}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={password}
              required
              shadow
              onChange={handlePassword}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" name="agree" />
            <Label htmlFor="agree">
              I agree with the&nbsp;
              <Link href="">
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

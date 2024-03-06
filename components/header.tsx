"use client";
import { Banner } from "flowbite-react";
import React from "react";

const HeaderComponent = () => {
  return (
    <header>
      <Banner>
        <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex items-center">
            <h1 className="flex items-center justify-center text-3xl font-bold text-teal-700 dark:text-teal-400">
              Password Manager
            </h1>
          </div>
        </div>
      </Banner>
    </header>
  );
};

export default HeaderComponent;

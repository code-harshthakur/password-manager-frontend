/* ------------------------------------------------ Search Page ------------------------------------------------ */
"use client";
import HeaderComponent from "@/components/header";
import {
  Banner,
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";

const SearchComponent = (): JSX.Element => {
  const [label, setlabel] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault(); //  Prevent Default Behaviour

    if (!label) {
      setError("Please enter a label to search");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ label }),
        },
      );

      const data = await response.json();

      if (response.status === 200) {
        setSearchResult(
          `Username: ${data.username}\nPassword: ${data.password}`,
        );
        setError("");
      } else {
        throw new Error(data.message || "Error Fetching the data");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setSearchResult("");
      }
    }
  };
  return (
    <>
      {/* Header */}
      <HeaderComponent />
      {/* Main Section */}
      <div className="flex h-screen justify-center items-center bg-gray-50">
        <form className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md" onSubmit={handleSearch}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Search</h2>
            <p className="text-gray-500">Enter your label below</p>
          </div>
          <div>
            <Label htmlFor="search">Search</Label>
            <TextInput
              id="search"
              type="text"
              placeholder="Write the label you are searching for"
              required
              shadow
              onChange={(e) => setlabel(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Search
          </Button>
          {error && <div className="text-red-500">{error}</div>}
          {searchResult && (
            <Textarea id="searchResult" readOnly value={searchResult} />
          )}
        </form>
      </div>
    </>
  );
};

export default SearchComponent;

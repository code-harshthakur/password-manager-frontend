import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const SearchComponent = ():JSX.Element => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <form className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Search</h2>
          <p className="text-gray-500">Enter your query below</p>
        </div>
        <div>
          <Label htmlFor="search">Search</Label>
          <TextInput
            id="search"
            type="text"
            placeholder="What are you looking for?"
            required
            shadow
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SearchComponent;
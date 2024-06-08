import { useState } from "react";
import DropdownOptions from "./components/DropdownOptions";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const handleSelect = (value) => {
    console.log(value);
    setQuery("");
  };

  return (
    <div className="p-4 w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="leading-8 focus:outline-none focus:border-2 focus:border-blue-500 rounded-md p-2 w-full"
        />
        {query && (
          <div className="absolute top-10 w-full bg-white rounded-md shadow-md">
            <DropdownOptions query={debouncedQuery} onSelect={handleSelect} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

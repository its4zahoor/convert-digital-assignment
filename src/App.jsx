import { useState } from "react";
import DropdownOptions from "./components/DropdownOptions";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [query, setQuery] = useState("phone");

  const debouncedQuery = useDebounce(query, 500);

  return (
    <div className="p-4 w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="leading-8 focus:outline-none focus:border-2 focus:border-blue-500 rounded-md p-2 w-full"
        />
        <div className="absolute top-10 w-full bg-white rounded-md shadow-md">
          <DropdownOptions query={debouncedQuery} />
        </div>
      </div>
    </div>
  );
}

export default App;

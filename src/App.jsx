import { useState } from "react";
import DropdownOptions from "./components/DropdownOptions";

function App() {
  const [query, setQuery] = useState("phone");

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
          <DropdownOptions query={query} />
        </div>
      </div>
    </div>
  );
}

export default App;

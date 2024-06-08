import { useCallback, useState } from "react";
import DropdownOptions from "./components/DropdownOptions";
import { useDebounce } from "./hooks/useDebounce";
import SearchIcon from "./assets/search.svg";
import ClearIcon from "./assets/clear.svg";

function App() {
  const [query, setQuery] = useState("");
  const queryDebounced = useDebounce(query, 1000);

  const handleSelect = useCallback((value) => {
    console.log(value);
    setQuery("");
  }, []);

  return (
    <div className="p-4 w-full">
      <div className="relative flex bg-white rounded-lg border-2 border-black focus-within:border-2 focus-within:border-blue-500">
        <img src={SearchIcon} className="btn-icon" alt="Search icon" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="leading-8 focus:outline-none p-2 w-full"
        />
        <img
          alt="Clear icon"
          src={ClearIcon}
          className="btn-icon"
          onClick={() => setQuery("")}
        />
        {queryDebounced && (
          <div className="absolute top-10 w-full bg-white rounded-md shadow-md">
            <DropdownOptions query={queryDebounced} onSelect={handleSelect} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

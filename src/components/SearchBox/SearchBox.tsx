import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "./SearchBox.css";
import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  const handleHitEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [inputValue],
  );

  const handleSearch = useCallback(() => {
    navigate(`/movie/search?query=${inputValue}`);
  }, [inputValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="search-box">
      <button className="btn-search flex-center focus:outline-none">
        <div>
          <MagnifyingGlassIcon className="size-6 text-white" />
        </div>
      </button>
      <input
        value={inputValue}
        onKeyDown={handleHitEnter}
        onChange={handleChange}
        type="text"
        className="input-search bg-red-600"
        placeholder="Type to Search..."
      />
    </div>
  );
};

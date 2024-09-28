import "./SearchBar.css";
import { useState, useEffect } from "react";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by email"
      />
    </>
  );
};

export default SearchBar;

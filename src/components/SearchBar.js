import { useState } from "react";
import '../styles/SearchBar.css'

const SearchBar  = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={term}
        className="search-input"
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;
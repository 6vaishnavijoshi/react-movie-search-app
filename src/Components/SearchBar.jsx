import { useState } from "react";

function SearchBar() {

  const [movieName, setMovieName] = useState("");

  const handleSearch = () => {
    console.log(movieName);
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Search movie..."
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;
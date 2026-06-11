import { useState } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState(null);

  const API_KEY = "72395595";

  const searchMovie = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`
    );

    const data = await response.json();

    setMovie(data);
  };

  return (
    <div>
      <h1>Movie Search App</h1>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <button onClick={searchMovie}>
        Search
      </button>

      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      )}
    </div>
  );
}

export default App;
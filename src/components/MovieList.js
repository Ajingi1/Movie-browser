import '../styles/MovieList.css'


import MovieCard from "./MovieCard";
const MovieList = ({ movies }) => {
  if (!movies.length) return <p>No movies found.</p>;

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;
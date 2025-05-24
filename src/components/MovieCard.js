import '../styles/MovieCard.css';

const MovieCard = ({ movie }) =>{
  return (
    <div className="movie-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'} alt={movie.Title} />
      <h3 className="movie-title">{movie.Title}</h3>
      <p className='movie-year'>{movie.Year}  <span>{movie.Type}</span></p>
    </div>
  );
}

export default MovieCard;
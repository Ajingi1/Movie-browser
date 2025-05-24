import { useState } from 'react';
import searchMovies from '../api/omdb';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (term) => {
    setLoading(true);
    setError('');
    try {
      const data = await searchMovies(term);
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  return (
    <div style={layoutStyle}>
      <main style={mainStyle}>
        <div className='search-container'>
          <h1 className='logo-text'>Movie Browser</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <MovieList movies={movies} />

      </main>
      <Footer />
    </div>
  );
}

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // fill full viewport height
};

const mainStyle = {
  flex: 1, // grow to take up remaining space
  padding: '1rem',
};


export default Home;

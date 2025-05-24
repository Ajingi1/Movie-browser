import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

const searchMovies = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default searchMovies;
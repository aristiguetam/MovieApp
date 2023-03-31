import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f123ba67e77b9bc3ca6271ab1ea741a4',
    language: 'es-ES',
  },
});

export default movieDb;

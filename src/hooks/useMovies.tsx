import {useEffect, useState} from 'react';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';
import movieDb from '../api/movieDb';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDb.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDb.get<MovieDBMoviesResponse>('/popular');
    const topRatePromise = movieDb.get<MovieDBMoviesResponse>('/top_rated');
    const upComingPromise = movieDb.get<MovieDBMoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatePromise,
      upComingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};

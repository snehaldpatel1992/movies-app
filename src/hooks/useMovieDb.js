import React from 'react';
import useAxios from 'axios-hooks';
import { MOVIE_DB_API_KEY } from '../constants/apiKeys';

export const useMovieDb = (path) => {
  const baseUrl = 'https://api.themoviedb.org';
  return useAxios(`${baseUrl}/${path}?api_key=${MOVIE_DB_API_KEY}`);
};

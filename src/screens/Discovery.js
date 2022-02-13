import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Poster } from '../components/Poster';
import { useMovieDb } from '../hooks/useMovieDb';

export const Discovery = () => {
  const [{ data, loading, error }] = useMovieDb(`3/movie/popular`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <Header title="Pop Movies" />
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          > * {
            display: flex;
            width: 50%;
          }
        `}
      >
        {data?.results?.map((movie, index) => {
          return (
            <Link key={index} to={`/movie-details/${movie.id}`}>
              <Poster posterPath={movie?.poster_path} alt={movie?.title} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

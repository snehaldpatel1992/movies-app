import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { css } from '@emotion/css';
import { Poster } from '../components/Poster';
import { useMovieDb } from '../hooks/useMovieDb';

const MovieTitle = ({ title }) => (
  <div
    className={css`
      height: 56px;
      padding-left: 16px;
      background: #746a64;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      color: #ffffff;
    `}
  >
    {title}
  </div>
);

const MovieReleaseDate = ({ releaseDate }) => (
  <div
    className={css`
      font-size: 20px;
      line-height: 24px;
      color: #212121;
    `}
  >
    {releaseDate}
  </div>
);

const MovieRuntime = ({ runtime }) => {
  if (!runtime) {
    return;
  }
  return (
    <div
      className={css`
        font-style: italic;
        font-size: 14px;
        line-height: 24px;
        color: #212121;
      `}
    >
      {runtime} mins
    </div>
  );
};

const MovieRating = ({ rating }) => {
  return (
    <div
      className={css`
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        color: #212121;
        margin-top: 26px;
      `}
    >
      {rating} / 10
    </div>
  );
};

const AddToFavouritesButton = () => {
  return (
    <button
      className={css`
        height: 56px;
        background: #746a64;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        align-items: center;
        color: #ffffff;
        border: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding: 16px 24px;
        margin-top: auto;
      `}
    >
      Add to Favourites
    </button>
  );
};

const MovieOverviewText = ({ overviewText }) => {
  return (
    <div
      className={css`
        font-size: 14px;
        line-height: 24px;
        color: #757575;
        padding: 24px;
      `}
    >
      {overviewText}
    </div>
  );
};

export const MovieDetails = () => {
  const { id } = useParams();
  const [{ data, loading, error }] = useMovieDb(`3/movie/${id}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <Header title="Movie details" showBackButton={true} />
      <MovieTitle title={data?.title} />
      <div
        className={css`
          display: flex;
          padding: 24px;
          gap: 16px;
        `}
      >
        <Poster posterPath={data?.poster_path} alt={data?.title} />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            margin-left: auto;
          `}
        >
          <MovieReleaseDate releaseDate={data?.release_date} />
          <MovieRuntime runtime={data?.runtime} />
          <MovieRating rating={data?.vote_average} />
          <AddToFavouritesButton />
        </div>
      </div>
      <MovieOverviewText overviewText={data?.overview} />
    </>
  );
};

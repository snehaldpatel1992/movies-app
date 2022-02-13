import React from 'react';

export const Poster = ({ posterPath, alt }) => {
  return (
    <img
      src={'https://image.tmdb.org/t/p/w185' + posterPath}
      alt={alt}
      width="100%"
    />
  );
};

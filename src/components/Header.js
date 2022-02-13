import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';
import { BackIcon } from './BackIcon';

export const Header = ({ title, showBackButton }) => {
  const navigate = useNavigate();

  return (
    <div
      className={css`
        display: flex;
        height: 64px;
        background: #212121;
        align-items: center;
      `}
    >
      {showBackButton && (
        <button
          className={css`
            margin-left: 20px;
            border: none;
            background: none;
          `}
          onClick={() => navigate(-1)}
        >
          <BackIcon />
        </button>
      )}
      <div
        className={css`
          margin-left: 20px;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          color: #ffffff;
        `}
      >
        {title}
      </div>
    </div>
  );
};

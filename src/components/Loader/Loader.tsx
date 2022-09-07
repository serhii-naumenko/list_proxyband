import React from 'react';
import { Spinner } from '@skbkontur/react-ui';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="Loader">
      <div className="Loader__container">
        <Spinner type="big" caption="Loading..." />
      </div>
    </div>
  );
};

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { NotFound } from './components/NotFound';
import { Posts } from './components/Posts';
import { UsersInfo } from './components/UsersInfo';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<UsersInfo />} />
          <Route path=":userId" element={<Posts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

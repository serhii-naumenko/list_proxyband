import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { NotFound } from './components/NotFound';
import { Posts } from './components/Posts';
import { UsersList } from './components/UsersList';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<UsersList />} />
          <Route path="userId" element={<Posts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

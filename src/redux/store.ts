import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './UserReducer';

const store = configureStore({ reducer });

export default store;

import { createSlice } from '@reduxjs/toolkit';
import { User } from '../Types/UserType';

interface InitialState {
  users: User[],
  textError: string,
}

const initialState: InitialState = {
  users: [],
  textError: '',
};

const userReducer = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUsersInfo: (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    },
    setTextError: (state, action) => {
      return {
        ...state,
        textError: action.payload,
      };
    },
  },
});

export const selectors = {
  getUsersInfo: (state: InitialState) => state.users,
  getTextError: (state: InitialState) => state.textError,
};

export const {
  setUsersInfo,
  setTextError,
} = userReducer.actions;

export const { reducer } = userReducer;

import { createSlice } from '@reduxjs/toolkit';
import { Album } from '../Types/AlbumType';
import { User } from '../Types/UserType';

interface InitialState {
  users: User[],
  albums: Album[],
}

const initialState: InitialState = {
  users: [],
  albums: [],
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
    setAlbumsInfo: (state, action) => {
      return {
        ...state,
        albums: action.payload,
      };
    },
  },
});

export const selectors = {
  getUsersInfo: (state: InitialState) => state.users,
  getAlbumsInfo: (state: InitialState) => state.albums,
};

export const {
  setUsersInfo,
  setAlbumsInfo,
} = userReducer.actions;

export const { reducer } = userReducer;

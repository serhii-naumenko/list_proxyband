import { createSlice } from '@reduxjs/toolkit';
import { Album } from '../Types/AlbumType';
import { Post } from '../Types/PostType';
import { User } from '../Types/UserType';

interface InitialState {
  users: User[],
  posts: Post[],
  albums: Album[],
  chosenPosts: Post[],
  chosenAlbums: Album[],
}

const initialState: InitialState = {
  users: [],
  posts: [],
  albums: [],
  chosenPosts: [],
  chosenAlbums: [],
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
    setPostsInfo: (state, action) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
    setAlbumsInfo: (state, action) => {
      return {
        ...state,
        albums: action.payload,
      };
    },
    setChosenPosts: (state, action) => {
      return {
        ...state,
        chosenPosts: action.payload,
      };
    },
    setChosenAlbums: (state, action) => {
      return {
        ...state,
        chosenAlbums: action.payload,
      };
    },
  },
});

export const selectors = {
  getUsersInfo: (state: InitialState) => state.users,
  getPostsInfo: (state: InitialState) => state.posts,
  getAlbumsInfo: (state: InitialState) => state.albums,
  getChosenPosts: (state: InitialState) => state.chosenPosts,
  getChosenAlbums: (state: InitialState) => state.chosenAlbums,
};

export const {
  setUsersInfo,
  setPostsInfo,
  setAlbumsInfo,
  setChosenPosts,
  setChosenAlbums,
} = userReducer.actions;

export const { reducer } = userReducer;

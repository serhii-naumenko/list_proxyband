import { createSlice } from '@reduxjs/toolkit';
import { Album } from '../Types/AlbumType';
import { Post } from '../Types/PostType';
import { User } from '../Types/UserType';

const postsFromStorage = localStorage.getItem('posts');
let postsToRender = [];

if (postsFromStorage !== null) {
  postsToRender = JSON.parse(postsFromStorage);
}

const nameFromStorage = localStorage.getItem('name');
let nameToTitle = '';

if (nameFromStorage !== null) {
  nameToTitle = JSON.parse(nameFromStorage);
}

interface InitialState {
  users: User[],
  posts: Post[],
  albums: Album[],
  chosenPosts: Post[],
  chosenName: string,
}

const initialState: InitialState = {
  users: [],
  posts: [],
  albums: [],
  chosenPosts: postsToRender,
  chosenName: nameToTitle,
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
    setChosenNameStore: (state, action) => {
      return {
        ...state,
        chosenName: action.payload,
      };
    },
  },
});

export const selectors = {
  getUsersInfo: (state: InitialState) => state.users,
  getPostsInfo: (state: InitialState) => state.posts,
  getAlbumsInfo: (state: InitialState) => state.albums,
  getChosenPosts: (state: InitialState) => state.chosenPosts,
  getChosenNameStore: (state: InitialState) => state.chosenName,
};

export const {
  setUsersInfo,
  setPostsInfo,
  setAlbumsInfo,
  setChosenPosts,
  setChosenNameStore,
} = userReducer.actions;

export const { reducer } = userReducer;

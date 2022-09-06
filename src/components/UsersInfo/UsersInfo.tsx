import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoFromServer } from '../../api/api';
import {
  selectors,
  setAlbumsInfo,
  setPostsInfo,
  setUsersInfo,
} from '../../redux/UserReducer';
import { Album } from '../../Types/AlbumType';
import { Post } from '../../Types/PostType';
import { User } from '../../Types/UserType';
import { Loader } from '../Loader';
import { UsersTable } from '../UsersTable';
import './UsersInfo.scss';

export const UsersList: React.FC = () => {
  const [textError, setTextError] = useState('');
  const usersStart = useSelector(selectors.getUsersInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    async function response() {
      try {
        const gottenUsers = await getInfoFromServer<User[]>('users');
        const gottenPosts = await getInfoFromServer<Post[]>('posts');
        const gottenAlbums = await getInfoFromServer<Album[]>('albums');

        dispatch(setUsersInfo(gottenUsers));
        dispatch(setPostsInfo(gottenPosts));
        dispatch(setAlbumsInfo(gottenAlbums));
        setTextError('');
      } catch {
        setTextError('Something went wrong. Reload the page, please.');
      }
    }

    response();
  }, []);

  if (usersStart.length === 0) {
    return (<Loader />);
  }

  return (
    <div className="UsersInfo">
      <p className="UsersInfo__textError">
        {textError}
      </p>
      {!textError && (
        <>
          <table className="UsersInfo__table">
            <caption className="UsersInfo__title">
              Information about users
            </caption>
            <thead className="UsersInfo__head">
              <tr
                className="UsersInfo__head--row"
              >
                <th
                  className="UsersInfo__head--cell"
                >
                  ID
                </th>
                <th
                  className="UsersInfo__head--cell"
                >
                  Name
                </th>
                <th
                  className="UsersInfo__head--cell"
                >
                  Username
                </th>
                <th
                  className="UsersInfo__head--cell"
                >
                  Posts of the chosen user
                </th>
                <th
                  className="UsersInfo__head--cell"
                >
                  Albums of the chosen user
                </th>
              </tr>
            </thead>
            <tbody
              className="UsersInfo__body"
            >
              <UsersTable />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

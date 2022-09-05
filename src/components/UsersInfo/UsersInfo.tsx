import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInfoFromServer } from '../../api/api';
import {
  setAlbumsInfo,
  setPostsInfo,
  setUsersInfo,
} from '../../redux/UserReducer';
import { Album } from '../../Types/AlbumType';
import { Post } from '../../Types/PostType';
import { User } from '../../Types/UserType';
import { UsersTable } from '../UsersTable';
import './UsersInfo.scss';

export const UsersList: React.FC = () => {
  const [textError, setTextError] = useState('');
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
                  Surname
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

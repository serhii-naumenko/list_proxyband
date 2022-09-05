import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectors, setChosenPosts } from '../../redux/UserReducer';
import { User } from '../../Types/UserType';
import './UsersTable.scss';

export const UsersTable: React.FC = () => {
  const usersFromServer = useSelector(selectors.getUsersInfo);
  const gottenPosts = useSelector(selectors.getPostsInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerPosts = useCallback((chosenId) => {
    const chosenPosts = gottenPosts.filter((post) => post.userId === chosenId);

    dispatch(setChosenPosts(chosenPosts));
    localStorage.setItem('posts', JSON.stringify(chosenPosts));

    navigate(`/${chosenId}`);
  }, [gottenPosts]);

  return (
    <>
      {usersFromServer.map((user: User) => (
        <tr
          className="UsersTable__row"
          key={user.id}
        >
          <td className="UsersTable__text">
            {user.id}
          </td>
          <td className="UsersTable__text">
            {user.name}
          </td>
          <td className="UsersTable__text">
            {user.username}
          </td>
          <td className="UsersTable__text">
            <button
              type="button"
              title="show the posts of the user"
              className="UsersTable__posts-albums"
              onClick={() => handlerPosts(user.id)}
            >
              posts
            </button>
          </td>
          <td className="UsersTable__text">
            <button
              type="button"
              title="show the Albums of the user"
              className="UsersTable__posts-albums"
            >
              albums
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

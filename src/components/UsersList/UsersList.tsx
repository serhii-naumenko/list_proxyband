import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoFromServer } from '../../api/api';
import { selectors, setTextError, setUsersInfo } from '../../redux/UserReducer';
import { User } from '../../Types/UserType';
import './UsersList.scss';

export const UsersList: React.FC = () => {
  const usersFromServer = useSelector(selectors.getUsersInfo);
  const dispatch = useDispatch();
  const urlUsers = 'users';

  // eslint-disable-next-line no-console
  console.log(usersFromServer);

  useEffect(() => {
    async function response() {
      try {
        const gottenUsers = await getInfoFromServer(urlUsers);

        dispatch(setUsersInfo(gottenUsers));
      } catch {
        dispatch(setTextError('Can not load users'));
      }
    }

    response();
  }, []);

  return (
    <div className="UsersList">
      Hello
      <ul className="UsersList__list">
        {usersFromServer.map((user: User) => (
          <li
            className="UsersLict__item"
            key={user.id}
          >
            {user.id}
            {user.name}
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

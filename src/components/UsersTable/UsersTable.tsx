import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectors, setChosenPosts } from '../../redux/UserReducer';
import { Album } from '../../Types/AlbumType';
import { User } from '../../Types/UserType';
import './UsersTable.scss';

const customStyles = {
  overlay: { backgroundColor: 'grey' },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px 80px',
  },
};

Modal.setAppElement('#root');

export const UsersTable: React.FC = () => {
  const usersFromServer = useSelector(selectors.getUsersInfo);
  const gottenPosts = useSelector(selectors.getPostsInfo);
  const gottenAlbums = useSelector(selectors.getAlbumsInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [chosenAlbums, setChosenAlbums] = useState<Album[]>([]);
  const [chosenName, setChosenName] = useState('');

  const handlerPosts = useCallback((chosenId) => {
    const chosenPosts = gottenPosts.filter((post) => post.userId === chosenId);

    dispatch(setChosenPosts(chosenPosts));
    localStorage.setItem('posts', JSON.stringify(chosenPosts));

    navigate(`/${chosenId}`);
  }, [gottenPosts]);

  const handlerAlbums = useCallback((chosenId) => {
    const albumsToRender = gottenAlbums.filter((album) => album.userId === chosenId);
    const chosenUser = usersFromServer.find((user) => user.id === chosenId);

    if (chosenUser) {
      setChosenName(chosenUser.name);
    }

    setIsOpen(true);
    // dispatch(setChosenAlbums(chosenAlbums));
    localStorage.setItem('albums', JSON.stringify(albumsToRender));
    setChosenAlbums(albumsToRender);
  }, [gottenAlbums, isOpen]);

  const modalIsClose = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

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
              onClick={() => handlerAlbums(user.id)}
            >
              albums
            </button>
          </td>
        </tr>
      ))}
      <Modal
        isOpen={isOpen}
        onRequestClose={modalIsClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="Modal">
          <button
            type="button"
            title="close the popup"
            className="Modal__button"
            onClick={modalIsClose}
          >
            X
          </button>
          <h1 className="Modal__title">
            {`Albums of the user ${chosenName}`}
          </h1>
          <ul className="Modal__list">
            {chosenAlbums.map((album) => (
              <li
                className="Modal__item"
                key={album.id}
              >
                <p className="Modal__album-id">
                  {`ID - ${album.id}`}
                </p>
                <p className="Modal__album-title">
                  {album.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

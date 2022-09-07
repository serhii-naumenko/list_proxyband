import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectors, setChosenNameStore, setChosenPosts } from '../../redux/UserReducer';
import { Album } from '../../Types/AlbumType';
import { User } from '../../Types/UserType';
import { ModalContent } from '../ModalContent';
import './UsersTable.scss';

const customStyles = {
  overlay: { backgroundColor: 'grey' },
  content: {
    top: '50px',
    left: '150px',
    right: '150px',
    bottom: '50px',
    padding: '10px 80px',
  },
};

Modal.setAppElement('#root');

export const UsersTable: React.FC = () => {
  const usersFromServer = useSelector(selectors.getUsersInfo);
  const gottenPosts = useSelector(selectors.getPostsInfo);
  const gottenAlbums = useSelector(selectors.getAlbumsInfo);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [chosenAlbums, setChosenAlbums] = useState<Album[]>([]);
  const [chosenName, setChosenName] = useState('');

  const handlerPosts = useCallback((chosenId) => {
    const chosenPosts = gottenPosts.filter((post) => post.userId === chosenId);
    const chosenUser = usersFromServer.find((user) => user.id === chosenId);

    if (chosenUser) {
      dispatch(setChosenNameStore(chosenUser.name));
      localStorage.setItem('name', JSON.stringify(chosenUser.name));
    }

    dispatch(setChosenPosts(chosenPosts));
    localStorage.setItem('posts', JSON.stringify(chosenPosts));

    window.open(`/#/${chosenId}`, '_blank');
  }, [gottenPosts]);

  const handlerAlbums = useCallback((chosenId) => {
    const albumsToRender = gottenAlbums.filter((album) => album.userId === chosenId);
    const chosenUser = usersFromServer.find((user) => user.id === chosenId);

    if (chosenUser) {
      setChosenName(chosenUser.name);
    }

    setIsOpen(true);
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
        <ModalContent
          chosenAlbums={chosenAlbums}
          chosenName={chosenName}
          modalIsClose={modalIsClose}
        />
      </Modal>
    </>
  );
};

import React from 'react';
import { Album } from '../../Types/AlbumType';
import './ModalContent.scss';

interface Props {
  chosenAlbums: Album[],
  chosenName: string,
  modalIsClose: () => void,
}

export const ModalContent: React.FC<Props> = ({
  chosenAlbums,
  chosenName,
  modalIsClose,
}) => {
  return (
    <div className="ModalContent">
      <button
        type="button"
        title="close the popup"
        className="Modal__button"
        onClick={modalIsClose}
      >
        X
      </button>
      <h1 className="ModalContent__title">
        {`Albums of the user ${chosenName}`}
      </h1>
      <ul className="ModalContent__list">
        {chosenAlbums.map((album) => (
          <li
            className="ModalContent__item"
            key={album.id}
          >
            <div className="ModalContent__container">
              <p className="ModalContent__album-id">
                {`ID - ${album.id}`}
              </p>
              <p className="ModalContent__album-title">
                {album.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

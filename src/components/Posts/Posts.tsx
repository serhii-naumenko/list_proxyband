import React, {
  useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectors } from '../../redux/UserReducer';
import './Posts.scss';

export const Posts: React.FC = () => {
  const chosenPosts = useSelector(selectors.getChosenPosts);
  const navigate = useNavigate();

  const handlerReturn = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <div className="Posts">
      <button
        type="button"
        title="Return to the list of users"
        className="Posts__returnUsers"
        onClick={handlerReturn}
      >
        Return to the list of users
      </button>
      <ul className="Posts__list">
        {chosenPosts.map((post) => (
          <li
            className="Posts__item"
            key={post.id}
          >
            <p className="Posts__id">
              {`ID - ${post.id}`}
            </p>
            <p className="Posts__title">
              {post.title}
            </p>
            <p className="Posts__text">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

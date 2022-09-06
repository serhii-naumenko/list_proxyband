import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectors } from '../../redux/UserReducer';
import './Posts.scss';

export const Posts: React.FC = () => {
  const chosenPosts = useSelector(selectors.getChosenPosts);
  const chosenNameStore = useSelector(selectors.getChosenNameStore);
  const [chosenName, setChosenName] = useState(chosenNameStore);
  const navigate = useNavigate();

  const handlerReturn = useCallback(() => {
    navigate('/');
  }, []);

  useEffect(() => {
    const name = chosenNameStore;

    setChosenName(name);
  }, [chosenName]);

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
      <h1 className="Posts__name">
        {`Posts of the user ${chosenName}`}
      </h1>
      <ul className="Posts__list">
        {chosenPosts.map((post) => (
          <li
            className="Posts__item"
            key={post.id}
          >
            <p className="Posts__id">
              {`ID - ${post.id}`}
            </p>
            <h2 className="Posts__title">
              {post.title}
            </h2>
            <p className="Posts__text">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

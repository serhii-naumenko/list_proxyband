import React, {
  useCallback,
  // useEffect,
  // useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectors } from '../../redux/UserReducer';
// import { Post } from '../../Types/PostType';
import './Posts.scss';

export const Posts: React.FC = () => {
  const chosenPosts = useSelector(selectors.getChosenPosts);
  // const [postsToRender, setPostsToRender] = useState<Post[]>(chosenPosts);
  const navigate = useNavigate();

  // eslint-disable-next-line no-console
  console.log(chosenPosts);

  // useEffect(() => {
  //   const posts = chosenPosts;

  //   setPostsToRender(posts);
  // }, [chosenPosts]);

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
            {post.id}
            {post.title}
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

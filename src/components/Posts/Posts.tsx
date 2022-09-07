import React, {
  useEffect,
  useState,
} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getInfoFromServer } from '../../api/api';
import { Post } from '../../Types/PostType';
import { User } from '../../Types/UserType';
import { Loader } from '../Loader';
import './Posts.scss';

export const Posts: React.FC = () => {
  const { userId } = useParams();
  const [chosenName, setChosenName] = useState('');
  const [postsToRender, setPostsToRender] = useState<Post[]>([]);
  const [textError, setTextError] = useState('');

  useEffect(() => {
    async function response() {
      try {
        const gottenPosts = await getInfoFromServer<Post[]>('posts');
        const gottenUser = await getInfoFromServer<User>(`users/${userId}`);

        if (userId) {
          const chosenPosts = gottenPosts.filter((post) => post.userId === +userId);

          setPostsToRender(chosenPosts);
        }

        setChosenName(gottenUser.name);
        setTextError('');
      } catch {
        setTextError('Something went wrong. Reload the page, please.');
      }
    }

    response();
  }, []);

  if (postsToRender.length === 0) {
    return (<Loader />);
  }

  return (
    <div className="Posts">
      <p className="UsersInfo__textError">
        {textError}
      </p>
      {!textError && (
        <>
          <NavLink
            title="Return to the list of users"
            className="Posts__returnUsers"
            to="/"
          >
            Return to the list of users
          </NavLink>
          <h1 className="Posts__name">
            {`Posts of the user ${chosenName}`}
          </h1>
          <ul className="Posts__list">
            {postsToRender.map((post) => (
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
        </>
      )}
    </div>
  );
};

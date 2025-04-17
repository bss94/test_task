import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectOneUser } from '../Users/usersSlice.ts';
import { useEffect } from 'react';
import { fetchPosts } from './postsThunk.ts';
import { selectFetchingPosts, selectPosts } from './postsSlice.ts';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner.tsx';
import PostsList from './components/PostsList.tsx';

const Posts = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectOneUser);
  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(selectFetchingPosts);
  useEffect(() => {
    if (user) {
      dispatch(fetchPosts(user.id));
    }
  }, [dispatch, user]);
  return loading ? <LoadingSpinner height="20vh" /> : <PostsList posts={posts} />;
};

export default Posts;

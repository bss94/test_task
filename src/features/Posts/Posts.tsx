import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectOneUser } from '../Users/usersSlice.ts';

const Posts = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectOneUser);
  return <div></div>;
};

export default Posts;

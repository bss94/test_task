import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchUsers } from './usersThunk.ts';
import { selectFetchUsers, selectUsers } from './usersSlice.ts';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner.tsx';

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const loading = useAppSelector(selectFetchUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log(users);
  return <>{loading ? <LoadingSpinner /> : <></>}</>;
};

export default Users;

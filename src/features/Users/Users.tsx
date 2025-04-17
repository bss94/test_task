import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchUsers } from './usersThunk.ts';
import { selectFetchUsers, selectUsers } from './usersSlice.ts';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner.tsx';
import UsersList from './components/UsersList.tsx';

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const loading = useAppSelector(selectFetchUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return loading ? (<LoadingSpinner />) : (<UsersList users={users} />);
};

export default Users;

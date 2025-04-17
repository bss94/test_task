import React, { useState } from 'react';
import { User } from '../../../types.ts';
import UserItem from './UserItem.tsx';
import { Alert, Grid, Typography } from '@mui/material';
import FilterUsersByUsername from './FilterUsersByUsername.tsx';

interface Props {
  users: User[];
}

const UsersList: React.FC<Props> = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const filterUsers = (filter: string) => {
    setFilteredUsers(users.filter((user: User) => user.username.toLowerCase().includes(filter.toLowerCase())));
  };

  const resetFilterUsers = () => {
    setFilteredUsers(users);
  };

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h4">Users List</Typography>
      </Grid>

      <FilterUsersByUsername filterUsers={filterUsers} resetFilter={resetFilterUsers} />

      {users.length > filteredUsers.length && (
        <Grid size={12} display="flex" alignItems="center" justifyContent="flex-end">
          <Typography variant="body2" color="textDisabled">
            Hidden {users.length - filteredUsers.length} results.
          </Typography>
        </Grid>
      )}

      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <Grid size={{ md: 4, sm: 6, xs: 12 }} key={user.id}>
            <UserItem user={user} />
          </Grid>
        ))
      ) : users.length > 0 ? (
        <Grid size={12}>
          <Alert severity="info">Not a single user matches the filtering criteria!</Alert>
        </Grid>
      ) : (
        <Grid size={12}>
          <Alert severity="error">Something wrong! Users Not Found!</Alert>
        </Grid>
      )}
    </Grid>
  );
};

export default UsersList;

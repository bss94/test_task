import React from 'react';
import { User } from '../../../types.ts';
import UserItem from './UserItem.tsx';
import { Alert, Grid, Typography } from '@mui/material';

interface Props {
  users: User[];
}

const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h4">Users List</Typography>
      </Grid>

      {users.length > 0 ? (
        users.map((user) => (
          <Grid size={{ md: 4, sm: 6, xs: 12 }} key={user.id}>
            <UserItem user={user} />
          </Grid>
        ))
      ) : (
        <Alert severity="error">Users Not Found</Alert>
      )}
    </Grid>
  );
};

export default UsersList;

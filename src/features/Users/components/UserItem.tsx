import React from 'react';
import { User } from '../../../types.ts';
import { Card, CardActionArea, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <Card>
      <CardActionArea
        component={Link}
        to={`/users/${user.id}`}
        sx={{
          p: 2,
        }}
      >
        <Typography variant="h6" color="textSecondary">
          {user.username}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AlternateEmailIcon fontSize="small" sx={{ me: 1 }} />
          {user.email}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LocationCityIcon fontSize="small" sx={{ me: 1 }} />
          {user.address.city}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default UserItem;

import React from 'react';
import { User } from '../../../types.ts';
import { Box, Card, CardActionArea, Typography } from '@mui/material';
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
        <Box display="flex" alignItems="center" justifyContent="flex-start" sx={{ mt: 1 }}>
          <AlternateEmailIcon fontSize="small" color="info" sx={{ mr: 1 }} />
          <Typography variant="subtitle1">{user.email}</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-start" sx={{ mt: 1 }}>
          <LocationCityIcon fontSize="small" color="info" sx={{ mr: 1 }} />
          <Typography variant="subtitle1">{user.address.city}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default UserItem;

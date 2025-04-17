import { useAppSelector } from '../../../app/hooks.ts';
import { selectOneUser } from '../usersSlice.ts';
import { Alert, Box, Card, Grid, Typography } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import Posts from '../../Posts/Posts.tsx';

const FullUser = () => {
  const user = useAppSelector(selectOneUser);

  return user ? (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Card sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ md: 6, sm: 6, xs: 12 }}>
              <Typography variant="h4">{user.name}</Typography>
            </Grid>
            <Grid size={{ md: 6, sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">Contacts</Typography>
              <Box display="flex" alignItems="center" justifyContent="flex-start" sx={{ mt: 1 }}>
                <AlternateEmailIcon fontSize="small" color="info" sx={{ mr: 1 }} />
                <Typography variant="subtitle2">{user.email}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="flex-start" sx={{ mt: 1 }}>
                <LocalPhoneIcon fontSize="small" color="info" sx={{ mr: 1 }} />
                <Typography variant="subtitle2">{user.phone}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="flex-start" sx={{ mt: 1 }}>
                <HomeIcon fontSize="small" color="info" sx={{ mr: 1 }} />
                <Typography variant="subtitle2">
                  {user.address.city}, {user.address.street}, {user.address.suite}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="flex-start" sx={{ mt: 1 }}>
                <WorkIcon fontSize="small" color="info" sx={{ mr: 1 }} />
                <Typography variant="subtitle2">{user.company.name}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid size={12}>
        <Posts />
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Alert severity="info">User not Found!</Alert>
      </Grid>
    </Grid>
  );
};

export default FullUser;

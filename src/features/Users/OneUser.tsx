import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { selectFetchOneUser } from './usersSlice.ts';
import { useEffect } from 'react';
import { fetchOneUser } from './usersThunk.ts';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner.tsx';
import FullUser from './components/FullUser.tsx';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const OneUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const loading = useAppSelector(selectFetchOneUser);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneUser(id));
    }
  }, [dispatch, id]);
  const navigateToMain = () => {
    navigate('/users');
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <Grid container spacing={2}>
      <Grid size={12}>
        <IconButton onClick={navigateToMain}>
          <ArrowBackIosNewIcon color="info" fontSize="small" />
        </IconButton>
      </Grid>
      <Grid size={12}>
        <FullUser />
      </Grid>
    </Grid>
  );
};

export default OneUser;

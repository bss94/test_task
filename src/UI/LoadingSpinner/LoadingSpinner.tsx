import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '80vh',
      }}
    >
      <CircularProgress sx={{ position: 'absolute', left: '50%', top: '45%', width: '100%', height: '100%' }} />
    </Box>
  );
};

export default LoadingSpinner;

import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface Props {
  height?: string;
}

const LoadingSpinner: React.FC<Props> = ({ height }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: height ? height : '80vh',
      }}
    >
      <CircularProgress sx={{ position: 'absolute', left: '50%', top: '45%', width: '100%', height: '100%' }} />
    </Box>
  );
};

export default LoadingSpinner;

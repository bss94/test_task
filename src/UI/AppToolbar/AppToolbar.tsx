import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  },
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 5 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <StyledLink to="/">SPA - users</StyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;

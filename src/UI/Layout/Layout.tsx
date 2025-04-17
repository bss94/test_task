import React, { PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import AppToolbar from '../AppToolbar/AppToolbar.tsx';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <AppToolbar />
      </header>
      <Container maxWidth="md" component="main">
        {children}
      </Container>
    </>
  );
};

export default Layout;

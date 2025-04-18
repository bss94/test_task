import Layout from './UI/Layout/Layout.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './features/Users/Users.tsx';
import OneUser from './features/Users/OneUser.tsx';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={'/users'} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<OneUser />} />
        <Route path="*" element={<Typography variant="h2">Page Not Found!</Typography>} />
      </Routes>
    </Layout>
  );
};

export default App;

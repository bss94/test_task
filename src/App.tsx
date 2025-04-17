import Layout from './UI/Layout/Layout.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './features/Users/Users.tsx';
import OneUser from './features/Users/OneUser.tsx';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={'/users'} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<OneUser />} />
      </Routes>
    </Layout>
  );
};

export default App;

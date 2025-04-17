import Layout from './UI/Layout/Layout.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './features/Users/Users.tsx';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={'/users'} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<></>} />
      </Routes>
    </Layout>
  );
};

export default App;

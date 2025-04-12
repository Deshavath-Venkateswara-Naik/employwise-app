import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default App;

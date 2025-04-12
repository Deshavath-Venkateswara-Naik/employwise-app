import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UsersPage.css';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchUsers = async (pageNumber) => {
    const res = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
    setUsers(res.data.data);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="user-page-container">
      <div className="header">
        <h2>Users List</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="user-grid">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            {/* Add Edit/Delete buttons here if needed */}
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UsersPage;

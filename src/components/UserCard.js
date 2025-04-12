import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
    setUsers(res.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.email}</p>
          <Link to={`/edit/${user.id}`}>Edit</Link>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default UserCard;

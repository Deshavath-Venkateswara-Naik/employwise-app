import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(res.data.data);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`, user);
    navigate('/users');
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
        <input type="text" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
        <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUserForm;

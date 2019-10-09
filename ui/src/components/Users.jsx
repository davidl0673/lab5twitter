import React, { useGlobal, useState, useEffect } from "reactn";
import client from "../api/client";

const Users = props => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await client.get("/users/");
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map(user => (
        <div>{user.email}</div>
      ))}
    </div>
  );
};

export default Users;

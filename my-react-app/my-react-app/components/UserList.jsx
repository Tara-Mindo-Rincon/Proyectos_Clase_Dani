import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <h2>User List</h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </section>
  );
}

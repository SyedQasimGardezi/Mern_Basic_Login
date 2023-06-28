import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/demo")
      .then((res) => {
        console.log(res.data);
        console.log("get function from userList");
        setUsers(res.data);
      })
      .catch((err) => {
        return console.log("error");
      });
  }, []);
  return (
    <div>
      {users.map((users) => {
        return (
          <ul>
            <li>
              {users.username}={users.password}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

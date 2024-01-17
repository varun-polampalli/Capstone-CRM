import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";

export default function Ticket() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/tickets");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div>
      <Navbar2/>
    <div className="py-20 container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Issue</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.issue}</td>
                <td>{user.status}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewticket/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editticket/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
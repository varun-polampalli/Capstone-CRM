import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";

export default function ViewProducts() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/products");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/product/${id}`);
    loadUsers();
  };

  return (
    <div>
      <Navbar2/>
    <div className="py-20 container">
      <div className="py-4">
        <table className="table border shadow">
          {/* <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead> */}
          <tbody>
            {users.map((user, index) => (
              
              <tr>
                {/* <th scope="row" key={index}>
                  {index + 1}
                </th> */}
                <td><img src="./images/mobile2.png"/></td>
                <td><h5>{user.pname}</h5>
                <h6 align="left">{user.rating}</h6><br></br>
                
                <h5 align="left" width= "25px" float= "left">M.R.P.:&nbsp; ₹{user.price}/-</h5>
                </td>
                {/* <td>{user.rating}</td>
                <td>{user.price}</td> */}
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproduct/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
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
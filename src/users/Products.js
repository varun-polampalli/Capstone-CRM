import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar1 from "./Navbar1";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function Products() {
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
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <section class="py-20">
    <div>
      <Navbar1/>
    <div className="container">
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
          <tbody border="5px">
            {users.map((user, index) => (
              
              <tr>
                {/* <th scope="row" key={index}>
                  {index + 1}
                </th> */}
                <td><img src="https://capston-crm.s3.ap-south-1.amazonaws.com/mobile2.png" width="800%"/></td>
                <td><h5>{user.pname}</h5>
                <h6 align="left">Rating:&nbsp;&nbsp;{user.rating}</h6><br></br>
                
                <h5 align="left" width= "25px" float= "left">M.R.P.:&nbsp; ₹{user.price}/-</h5>
                
                <h5 align="right" width="24px" float= "right">
                <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/buynowproduct/${user.id}`}
                  >

{/* <button type="submit" class="h-10 px-1 m-12 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={handleClickadminforget}>
                                    Forgot password
                                </button > */}
                    Buy Now
                  </Link></h5>
                </td>

              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </section>
  );
}
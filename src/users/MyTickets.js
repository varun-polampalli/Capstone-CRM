import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar1 from "./Navbar1";

function MyTickets(){
  /* const [user, setUser] = useState({
    username: "",
    email: "",
    issue: "",
    status:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/ticket/${id}`);
    setUser(result.data);
  };
 */
  return (
    <div className="container">
     <Navbar1/>
      <h2>This section is under progress</h2>
      <Link to="/usermenu"></Link>
      {/* <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Your Ticket</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>UserName:</b>&nbsp;
                  {user.username}
                </li>

                <li className="list-group-item">
                  <b>Email:</b>&nbsp;
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Issue:</b>&nbsp;
                  {user.issue}
                </li>
                <li className="list-group-item">
                  <b>Status:</b>&nbsp;
                  {user.status}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/usermenu"}>
            Previous
          </Link>
        </div>
      </div> */}
    </div>
  );
}
    export default MyTickets;
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

export default function AddUser() {
  let navigate = useNavigate();

  const [ticket, setTicket] = useState({
    username: "",
    email: "",
    issue: "",
    status: "",
  });

  const { username, email, issue,status } = ticket;

  const onInputChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/ticket", ticket);
    navigate("/issueraised");
  };

  return (
    <div>
        <Navbar1/>
    <div className="py-20 container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Any Issues</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Issue
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Issue"
                name="issue"
                value={issue}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Status" className="form-label">
                Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Active"
                name="status"
                value={status}
                autoComplete="Active"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/usermenu">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

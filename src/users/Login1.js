import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Captcha } from "./Captcha";


{/*import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import UserMenu from "./UserMenu";

export default function Login() {
    const navigate = useNavigate();
  
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/usermenu');
      };
    

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login User</h2>

          <form >

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
               
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                
                
              />
            </div>
            <button onClick={navigateHome}>Submit</button>
            <Routes>
          
          <Route path="/usermenu" element={<UserMenu />} />
        </Routes>
          </form>
        </div>
      </div>
    </div>
  );
}

*/}





const Login1 = () => {
    
    const handleClickU = () => navigate('/usermenu');
    const handleClickL = () => navigate('/');


    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function usermenu(event) {
        event.preventDefault();
        
        try {
            await axios.post("http://localhost:8080/api/n1/users/login", {
                email: email,
                password: password,

            }).then((res) => {
                console.log(res.data);

                if (res.data.message == "email not exist") {
                    alert("email not exist");
                }
                else if (res.data.message == "Login Success") {
                    navigate('/usermenu');
                }
                else {
                    alert("Incorrect email or Password");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="./images/jira.png"
                        alt="Your Company"
                        style={{ height:'80px',maxWidth:'150px', borderRadius: '8px' }}
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required

                                    onChange={(event) => {
                                        setemail(event.target.value);
                                    }}

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                {/* <div className="text-sm">
                                    <a href="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required

                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }
                                    }

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div>
                        <Captcha/>


                        <div>
                            <button
                                type="submit"
                                onClick={usermenu}
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login as User
                            </button>
                        </div>
                    </form>
                    <form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            <button
                                type="submit"
                                onClick={handleClickL}
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Previous
                            </button>
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login1;

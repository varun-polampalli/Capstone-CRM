import react from 'react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar1 from './Navbar1';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Payments = () => {
    const navigate = useNavigate();
    const handleClickP = () => navigate('/paymentdone');

    const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async (props) => {
    const result = await axios.get("http://localhost:8080/products");
    setUsers(result.data);
  };
  /* users.map((user, index) => (
    var price={user.price})
    )} */
    return (

        <>
            {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div>
        <Navbar1/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <table>
                                <tr><td><img src="./images/paytm.png" style={{ height:'110px',maxWidth:'150px', borderRadius: '8px' }}/></td><td><img src="./images/visa.png" style={{ height:'110px',maxWidth:'150px', borderRadius: '10px' }}/></td><td><img src="./images/phonpe2.png" style={{ height:'110px',maxWidth:'150px', borderRadius: '80px' }}/></td></tr>
                                <tr><td><img src="./images/gpay.png" style={{ height:'90px',maxWidth:'150px', borderRadius: '8px' }} /></td><td><img src="./images/master.jpg" style={{ height:'110px',maxWidth:'900px', borderRadius: '70px' }}/></td><td><img src="./images/apay.png" width="80%"/></td></tr>
                            </table>
                            
                            
                            
                            
                            
                            
                        </div>
                        
                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                                Total Amount
                            </label>
                            <div className="mt-2">
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    value={40000}
                                    autoComplete="400"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>                        

                        <div>
                            <button
                                type="submit"
                                onClick={handleClickP}
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Buy Now
                            </button>
                            
                            
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
}
export default Payments;
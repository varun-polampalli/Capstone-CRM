import { NavLink,Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


function Navbar1() {
    return (
        <div>
            <nav class="flex px-4 border-b md:shadow-lg items-center flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] lg:flex-wrap lg:justify-start">
                <div class="text-lg font-bold md:py-0 py-4">
                <img
                        className="mx-auto h-10 w-auto"
                        src="./images/jira.png"
                        alt="Your Company"
                        style={{ height:'40px',maxWidth:'150px', borderRadius: '8px' }}
                        
                    />
                </div>
                <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                    <NavLink to={"/usermenu"}>
                        <li>
                            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50 " style={{"textDecoration":'none'}}>
                                <span>Home</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/products"}>
                        <li>
                            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                                <span>Products</span>
                            </a>
                        </li>
                    </NavLink>
                    {/* <NavLink to={"/payments"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Payments</span>
                        </a>
                    </li>
                </NavLink> */}
                    <NavLink to={"/enquiry"}>
                        <li>
                            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                                <span>Customer Care</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/support"}>
                        <li>
                            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                                <span>Reach Us</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/faq"}>
                        <li>
                            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                                <span>FAQ</span>
                            </a>
                        </li>
                    </NavLink>
                    
                    <Link to={"/"}>
                        <li>
                            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                                <span>Logout</span>
                            </a>
                        </li>
                    </Link>
                    <CgProfile size={50}/>
                </ul>
            </nav>
        </div>
);
}
export default Navbar1;


        /*
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    USER
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <Link className="btn btn-outline-light" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-light" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-light" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-light" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-light" to="/login">
                    Login
                  </Link>
                </div>
              </nav>
            </div>
            */

            /* <NavLink to={"/payments"}>
                        <li>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg> */

                            /* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> */
                            /* <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                                <span>CART</span>
                            </a> */




                        /*</li>
                    </NavLink> */

            























    
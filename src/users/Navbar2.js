import { NavLink } from 'react-router-dom';

function Navbar2() {
    return (
        <div>
        <nav class="flex px-4 border-b md:shadow-lg items-center flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] lg:flex-wrap lg:justify-start">
            <div class="text-lg font-bold md:py-0 py-4">
            <img
                        className="mx-auto h-10 w-auto"
                        src="./images/jira.png"
                        alt="Your Company"
                        style={{ height:'50px',maxWidth:'150px', borderRadius: '8px' }}
                    />
            </div>
            <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                <NavLink to={"/admin"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}> 
                            <span>Home</span>
                        </a> 
                    </li>
                </NavLink>
                <NavLink to={"/addproducts"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                            <span>AddProducts</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/viewproducts"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                            <span>Products</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/customerslist"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                            <span>Customers</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/ticket"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                            <span>Ticket</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/team"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                            <span>Team</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{"textDecoration":'none'}}>
                            <span>Logout</span>
                        </a>
                    </li>
                </NavLink>
                

          
            </ul>
            <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
            </div>
        </nav>
        </div>



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























    );
}
export default Navbar2;
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import UserMenu from "./users/UserMenu";
import Login from "./users/Login";
import Login1 from "./users/Login1";
import Login2 from "./users/Login2";
import Register from "./users/Register";
import Products from "./users/Products";
import Payments from "./users/Payments";
import Support from "./users/Support";
import Enquiry from "./users/Enquiry";
import Faq from "./users/Faq";
import Admin from "./users/Admin";
import Productsadmin from "./users/Productsadmin";
import CustomersList from "./users/CustomersList";
import Ticket from "./users/Ticket";
import Team from "./users/Team";
import IssueRaised from "./users/IssueRaised";
import Paymentdone from "./users/Paymentdone";
import ViewTicket from "./users/ViewTicket";
import EditTicket from "./users/EditTicket";
import AddProducts from "./users/AddProducts";
import ViewProducts from "./users/ViewProducts";
import EditProduct from "./users/EditProduct";
import BuynowProduct from "./users/BuynowProduct";
import LoginValid from "./users/LoginValid";
import Forgotpassword from "./users/Forgotpassword";
import Chatbot from "./users/Chatbot";
 import Welcome from "./users/Welcome";
 import MyTickets from "./users/MyTickets";
 import Captcha from "./users/Captcha";

function App() {
  return (
    <div className="App">
      <div>
        {/* <Chatbot/> */}
        {/*
     <Router>
     <Routes>
       <Route path='/' element={<Welcome/>}/>
       <Route path='/registerlogin' element={<Register/>}/>
       <Route path='/userlogin' element={<Login/>}/>
     </Routes>
     </Router>
  </div>*/}

  <BrowserRouter>
        {/*<Router>*/}
          {/*<Navbar/>*/}
          
          <Routes>
          
          <Route exact path="/loginvalid" element={<LoginValid />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/chatbot" element={<Chatbot />} />
            <Route exact path="/" element={<Welcome/>} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/usermenu" element={<UserMenu />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/login1" element={<Login1 />} />
            <Route exact path="/login2" element={<Login2 />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path="/edituser/:id" element={<EditUser />} />
            <Route exact path="/viewuser/:id" element={<ViewUser />} />
            <Route path="/products" element={<Products />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/support" element={<Support />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/productsadmin" element={<Productsadmin />} />
          <Route path="/customerslist" element={<CustomersList />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/team" element={<Team />} />
          <Route path="/issueraised" element={<IssueRaised />} />
          <Route path="/paymentdone" element={<Paymentdone />} />
          <Route path="/viewticket/:id" element={<ViewTicket />} />
          <Route path="/editticket/:id" element={<EditTicket />} />
          <Route path="/captcha" element={<Captcha />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/viewproducts" element={<ViewProducts />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/buynowproduct/:id" element={<BuynowProduct />} />
          <Route exact path="/mytickets" element={<MyTickets />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          </Routes>
          
        {/*</Router>*/}
        </BrowserRouter>
        
        {/*<Router>
      <Switch>
        <Route exact path={"/"} component={Layout} />
        <Route path={"/login"} component={Login} />
      </Switch>
</Router>*/}


      </div>
    </div>
  );
}

export default App;

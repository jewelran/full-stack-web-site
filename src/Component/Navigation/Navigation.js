import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Navigation.css'
import logo from '../../images/images.png'

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
   <div className="navContainer">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <img style ={{height:"70px",marginRight:"20px"}} src={logo} alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           <h1>HOT FOODS</h1>
           
          </Nav>
          <Nav>

            <Link to = "/home"><li>Home</li></Link>
            <Link to = "/order"><li>Order</li></Link>
            <Link to = "/event"><li>Admin</li></Link>
            <Link to = "/"><li>Deals</li></Link>

            {
              loggedInUser.name || loggedInUser.email ? <Link onClick = {() => setLoggedInUser({})}> <button className= "logBtn">Logout</button> </Link>: <Link to ="/login"> <button className = "logBtn">Login</button> </Link>
            }
            {
              loggedInUser.photo ? <img style ={{height:"35px",borderRadius:"50%",marginTop:"20px"}} src={loggedInUser.photo} alt="" /> : loggedInUser.name
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   </div>
    );
};

export default Navigation;
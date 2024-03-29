import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Event from "../Event/Event";
import { Nav } from "react-bootstrap";
import "./Admin.css";
import ManageProduct from "./../ManageProduct/ManageProduct";
const Admin = () => {
  return (
    <div className="AdminContainer ">
      <div className="container d-flex">
        <Router>
          <div
            style={{
              width: "30%",
              height: "100vh",
              paddingTop: "5rem",
              lineHeight: "40px",
            }}
            className=""
          >
            <Nav defaultActiveKey="/home" className="flex-column">
              <Link
            className='adminNavLink'
                to="/event"
              >
                Add Product
              </Link>
              <Link
               className='adminNavLink'
                to="/checkOut"
              >
                Manage Product
              </Link>
              <Link
               className='adminNavLink'
                eventKey="link-2"
              >
                Edit Product
              </Link>
            </Nav>
          </div>
          <div style={{ width: "70%" }} className="">
            <Switch>
              <Route path="/event">
                <Event></Event>
              </Route>
              <Route path="/checkOut">
                <ManageProduct></ManageProduct>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Admin;

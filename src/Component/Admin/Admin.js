import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Event from "../Event/Event";
import { Nav } from 'react-bootstrap';
import "./Admin.css"
import ManageProduct from './../ManageProduct/ManageProduct';
const Admin = () => {
  return (
    <div className = "AdminContainer ">
       
      <div className="container d-flex">
        
        <Router>
        <div style={{width:"30%",border:"1px solid red",height:"100vh"}} className="">
              <h1 style ={{textAlign:"center",color:'white'}}>Hot Food's</h1>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Link to ="/event">Add Product</Link>
                <Link to ="/checkOut">Manage Product</Link>
                <Link eventKey="link-2">Edit Product</Link>
              
              </Nav>
            </div>
            <div style ={{width:"70%"}} className="">
        

            <Switch>
            <Route path="/event">
                <Event></Event>
                </Route>
                <Route path = "/checkOut">
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

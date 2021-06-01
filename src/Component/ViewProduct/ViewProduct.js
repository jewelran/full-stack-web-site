import React, { useContext } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import spinner from "../../images/unnamed.gif";
import Order from "../Order/Order";
import "./ViewProduct.css"


const ViewProduct = ({ foods }) => {

  return (
    <div>
      {foods.length === 0 ? (
        <div className="">
          <img src={spinner} alt="" />
        </div>
      ) : (
        <div  className="">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Product Name</th>
                <th>quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{foods.name}</td>
                <td>1</td>
                <td>${foods.price}</td>
              </tr>
            </tbody>
          </Table>
          <Link to={`/order/${foods._id}`} style={{ marginRight: "15px" }}>
              <Button  variant="primary">CheckOut ordered...</Button>
            </Link>
          <Card style={{ margin: "15px",width:"302px",backgroundColor:"#ffffff05"}}>
            <Card.Img style={{ height: "300px" ,width:"300px" ,borderRadius:"10px"}} src={foods.imagesUrl} />
          </Card>
        
        </div>
      )}
    </div>
  );
};

export default ViewProduct;

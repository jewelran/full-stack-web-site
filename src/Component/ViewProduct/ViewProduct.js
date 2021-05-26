import React, { useContext } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import spinner from "../../images/unnamed.gif";
import Order from "../Order/Order";
const ViewProduct = ({ foods }) => {


  // const  handleDelete = (id) => { 

  //     fetch(`http://localhost:5500/deleteProduct/${id}`,{
  //       method:"DELETE"
  //     })
  //     .then((response) => {
  //         console.log("product delete successfully" , response);

  //     })

  //   }
  return (
    <div>
      {foods.length === 0 ? (
        <div className="">
          <img src={spinner} alt="" />
        </div>
      ) : (
        <div className="">
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
            <Link to={`/order/${foods._id}`} style={{ marginRight: "15px" }}>
              <Button  variant="primary">CheckOut ordered...</Button>
            </Link>
          </Table>

          <Card style={{ width: "30rem",height:"30rem", float: "left", margin: "15px",border:"none" }}>
            <Card.Img style={{ height: "600px" ,width:"600px" }} src={foods.imagesUrl} />
          </Card>
        
        </div>
      )}
    </div>
  );
};

export default ViewProduct;

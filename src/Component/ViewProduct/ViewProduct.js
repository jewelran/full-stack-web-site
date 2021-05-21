import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import spinner from "../../images/unnamed.gif";
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
         
          <Card style={{ width: "18rem", float: "left", margin: "15px" }}>
            <Card.Img style={{ height: "300px" }} src={foods.imagesUrl} />
            <Card.Body>
              <Card.Title>{foods.name}</Card.Title>
              <Card.Text>
                <p>
                  <span>Price: ${foods.price}</span> wight: {foods.wight}
                </p>
              </Card.Text>

              <Link to="/order" style={{ marginRight: "15px" }}>
                <Button variant="primary">Order Now...</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
       
      )}
    </div>
  );
};

export default ViewProduct;

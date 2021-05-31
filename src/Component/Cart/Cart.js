
import React from "react";
import { Card ,Button, InputGroup} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import './Cart.css'
const Cart = ({food}) => {

  return (
    <div  className="container ">
       
      <Card className ="cartContainer" style={{ width: "20rem",float:"left",margin:"15px"}}>
        <Card.Img style ={{ height:"300px"}} src={food.imagesUrl} />
        <Card.Body>
          <Card.Title>{food.name}</Card.Title>
          <Card.Text>
         {food.description}
          </Card.Text>
          {

          }
          <Link style = {{marginRight:"15px"}}  to = {`/CheckOut/${food._id}`}><Button style={{ background:"#71BA58"}} variant="primary">Buy Now</Button></Link>
       
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;

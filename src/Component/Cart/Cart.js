
import React from "react";
import { Card ,Button, InputGroup} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const Cart = ({food}) => {
const {_id} = food
console.log(_id);
  const checkOut = useParams()
  console.log("ths is is params",checkOut.id);

  const productAddHandler = () => {
    fetch('http://localhost:5500/addProduct', {
      method:"POST",
      headers: { 
        "Content-Type":"application/json"
      },
      body: JSON.stringify(food)
    })
    .then(response => {
      console.log("update user production", response);
    })
  }


  return (
    <div  className="container ">
       
      <Card style={{ width: "18rem",float:"left",margin:"15px"}}>
        <Card.Img style ={{ height:"300px"}} src={food.imagesUrl} />
        <Card.Body>
          <Card.Title>{food.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {

          }
          <Link style = {{marginRight:"15px"}} onClick= { () => productAddHandler(food._id)} to = {`/CheckOut/${food._id}`}><Button variant="primary">Add Product</Button></Link>
       
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;

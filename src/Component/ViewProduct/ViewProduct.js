import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewProduct = ({foods}) => {

    
const  handleDelete = (id) => {
    
    fetch(`http://localhost:5500/deleteProduct/${id}`,{
      method:"DELETE"
    })
    .then((response) => {
        console.log("product delete successfully" , response);
        
    })
  
  }
    return (
        <div>
        <Card style={{ width: "18rem",float:"left",margin:"15px"}}>
        <Card.Img style ={{ height:"300px"}} src={foods.imagesUrl} />
        <Card.Body>
          <Card.Title>{foods.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        
          <Link  style = {{marginRight:"15px"}} onClick= { () => handleDelete(foods._id)}><Button variant="primary">Remove</Button></Link>
         
        </Card.Body>
      </Card>
        </div>
    );
};

export default ViewProduct;
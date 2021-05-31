import React from "react";
import { Card ,Button} from 'react-bootstrap';

const ManageCart = ({pd}) => {
const handleDelete = (id) => {
    fetch(`https://protected-dusk-75573.herokuapp.com/deleteProduct/${id}`, {
        method:"DELETE"
    })
    .then(response => {
        console.log("product delete successfully", response);
    })
}


  return (
    <div style ={{float:"left",margin:"20px"}}>
      <Card style={{ width: "13rem", height:"14rem", backgroundColor:"#71BA58",float:'left' }}>
        {/* <Card.Img style ={{width:"100%",height:"200px"}} variant="top" src= {pd.imagesUrl} /> */}
        <Card.Body>
          <Card.Title>{pd.name}</Card.Title>
          <Card.Text>
              <p>Price: ${pd.price}  <span>Wight: {pd.wight}</span></p>
          </Card.Text>
          <Button variant="primary">Edit</Button>
          <Button style = {{marginLeft:"20px"}} onClick = {() => handleDelete(pd._id)} variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ManageCart;

import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { userContext } from "../../App";
import UserItem from "../UserItem/UserItem";
const Order = () => {
  const order = useParams();
  console.log(order.id);

  const [food, setFood] = useState([]);
  const [currentUserItem, setCurrentUserItem] = useState([]);
  console.log(currentUserItem);
  console.log(food);
  // const checkOut = useParams()
  // console.log(checkOut.id);
  const uniqueFood = food.filter((pd) => pd._id === order.id);
  console.log(uniqueFood[0]);
  useEffect(() => {
    const url = "http://localhost:5500/allFoods";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  // load currentUserItem
  useEffect(() => {
    fetch("http://localhost:5500/currentUserProduct")
      .then((res) => res.json())
      .then((data) => setCurrentUserItem(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const productAddHandler = () => {
    fetch("http://localhost:5500/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uniqueFood[0]),
    }).then((response) => {
      console.log("update single Data", response);
    });
  };

  return (
    <div className="">
      <div className="container">
      <h1 style={{ textAlign: "center" }}>Order Now</h1>
      <h3>Your total Foods : {currentUserItem.length}</h3>
      {
        currentUserItem.map((item) => <UserItem item = {item}></UserItem>)
      }
      </div>
      
      
      <div  className="container d-flex ">
        <div style={{ width: "70%" }} className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        
            <Button onClick={() => productAddHandler()}>Confirm Order</Button>
       
        </div>
        <div style={{ width: "30%" }} className="">
          <h4>Order summery</h4>
          <p>Name: ${currentUserItem[0].price}</p>
          <p>quantity: 1</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Order;

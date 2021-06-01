import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { userContext } from "../../App";
import UserItem from "../UserItem/UserItem";
import "./Order.css"
const Order = () => {
  const order = useParams();
  // console.log(order.id);
  const [loggedInUser, setLoggedInUser]= useContext(userContext)
  console.log(loggedInUser.email);
  const [food, setFood] = useState([]);
  const [currentDate, setCurrentDate]= useState({
    data: new Date().toDateString("dd/MM/yyyy"),
    
  });
  const [address,setAddress] = useState({})
  const [currentUserItem, setCurrentUserItem] = useState([]);
  // console.log(currentUserItem)
  // console.log(food);
  const uniqueFood = food.filter((pd) => pd._id === order.id);
  // console.log(uniqueFood[0]);
  useEffect(() => {
    const url = "http://localhost:5500/allFoods";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  // load currentUserItem
  useEffect(() => {
    fetch(`http://localhost:5500/currentUserProduct?email=${loggedInUser.email}`,)
      .then((res) => res.json())
      .then((data) => setCurrentUserItem(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setAddress(data);

  const productAddHandler = (id) => {
    if (id) {
      const userData = {...loggedInUser, ...uniqueFood[0],...currentDate}
      console.log(userData);
      fetch("http://localhost:5500/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then((response) => {
        console.log("update single Data", response);
      });
    }
    else{
      alert("please select your item")
    }
   

  };


  return (
    <div className="OrderFullContainer">
      <div className="container">
      <h1 style={{ textAlign: "center",color: "white",padding:"10px"}}>Order Now</h1>
      <h3 style ={{color: "white"}}>Your total Foods : {currentUserItem.length}</h3>
      {
        currentUserItem.map((item) => <UserItem item = {item}></UserItem>)
      }
      </div>
      
      
      <div className="container d-flex ">
        <div style={{ width: "70%" }} className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("PhoneNumber", { required: true })} placeholder = "Your phone number"/>
            <br />
            <br />
            {errors.PhoneNumber && <span  style={{color: "white"}}>This field is required</span>}
            <input {...register("address", { required: true })} placeholder ="Your address"/>
            <br />
            <br />
            <br />
            {errors.address && <span  style={{color: "white"}}>This field is required</span>}
            <br />
            <input onClick={() => productAddHandler(order.id)} type="submit" value = "confirm Order"/>
          </form>
        <br />
        <br />
         
        </div>
        <div style={{ width: "30%",color: "white" }} className="">
          <h4>Order summery</h4>
          {
            uniqueFood.map((pd) => `
            Product Name : ${pd.name}
            Price : ${pd.price}`)
          }
          <p>quantity: {order.id ? "1" : "0"}</p>
        
        </div>
      </div>
    </div>
  );
};

export default Order;

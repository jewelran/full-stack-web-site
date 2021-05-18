import React, { useEffect, useState } from "react";
import spinner from "../../images/unnamed.gif";
import ViewProduct from "../ViewProduct/ViewProduct";

const CheckOut = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5500/food";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div className="container">
      <h3>Your total product : {food.length}</h3>
      {food.length === 0 && (
       <div className="">
            <img
          style={{
            height: "70px",
            marginTop: "30vh",
            width: "70px",
            marginLeft: "32.5rem",
          }}
          src={spinner}
          alt=""
        />
        <p style ={{ textAlign:"center",marginTop:"2rem", fontWeight:"700"}}>Please wait...</p>
       </div>
      )}

      {food.map((food) => (
        <ViewProduct
         foods={food}></ViewProduct>
      ))}
    </div>
  );
};

export default CheckOut;

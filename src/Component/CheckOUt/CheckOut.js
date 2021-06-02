import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import spinner from "../../images/unnamed.gif";
import ViewProduct from "../ViewProduct/ViewProduct";
import "./CheckOut.css";
const CheckOut = () => {
  const [food, setFood] = useState([]);
  const checkOut = useParams();
  const uniqueFood = food.filter((pd) => pd._id === checkOut.id);

  useEffect(() => {
    const url = "https://protected-dusk-75573.herokuapp.com/allFoods";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div className="checkOutFullContainer">
      <div style={{ color: "white" }} className="container">
        <h3>Your total product : {uniqueFood.length}</h3>
        {food.length === 0 && (
          <div className="">
            <img
           className ="checkOutImg"
              src={spinner}
              alt=""
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "2rem",
                fontWeight: "700",
              }}
            >
              Please wait...
            </p>
          </div>
        )}
        <div className=""></div>

        {uniqueFood.map((food) => (
          <ViewProduct foods={food}></ViewProduct>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;

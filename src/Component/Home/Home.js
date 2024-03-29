import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import spinner from "../../images/unnamed.gif";
import "./Home.css";
const Home = () => {
  const [foods, setFoods] = useState([]);
  // load all foods collection.
  useEffect(() => {
    const url = "https://protected-dusk-75573.herokuapp.com/allFoods";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  // search btn........... 
  const handleSearch = () => {
    alert("No develop");
  };
  return (
    <div className="homeContainer">
      <div className="container ">
        <div className="searchContainer">
          <h3 style={{ color: "white" }}> Total foods items:{foods.length}</h3>
          <input
            className="searchInput"
            type="text"
            name=""
            id=""
            placeholder="Find Your favorite items"
          />
          <input
            onClick={() => handleSearch()}
            className="searchBtn"
            type="submit"
            value="search"
          />
        </div>
        <br />
        <br />
        <br />
        
        {foods.length === 0 ? (
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
        ) : (
          foods.map((food) => <Cart food={food}></Cart>)
        )}
      </div>
    </div>
  );
};

export default Home;

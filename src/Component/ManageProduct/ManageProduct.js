import React, { useEffect, useState } from "react";
import ManageCart from "./ManageCart";
import spinner from "../../images/unnamed.gif";
const ManageProduct = () => {
  const [manageProduct, setManageProduct] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5500/allFoods";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageProduct(data));
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h2>Total Product: {manageProduct.length}</h2>
      {manageProduct.length === 0 ? (
        <div>
          <img
            style={{
              height: "70px",
              marginTop: "30vh",
              width: "70px",
              marginLeft: "26rem",
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
         manageProduct.map((pd) => <ManageCart pd={pd}></ManageCart>)
       )}
    </div>
  );
};

export default ManageProduct;

import React, { useState } from "react";
import "./Event.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const Event = () => {
  const [imgURL, setImgUrl] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const thisData = {
      name: data.name,
      wight: data.wight,
      price: data.price,
      description: data.description,
      imagesUrl: imgURL,
    };
    // load all foods.....
    fetch("https://protected-dusk-75573.herokuapp.com/allFoods", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thisData),
    }).then((result) => {
      console.log(result, "data upload successfully");
    });
  };
  // for upload imgbb.com
  const imgHandle = (event) => {
    console.log(event.target.files[0]);
    const imgInfo = new FormData();
    imgInfo.set("key", "941644256336912a1409c0bcfce50071");
    imgInfo.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgInfo)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container eventContainer">
      <h2>ADD FOODS</h2>

      <div style={{ margin: "0 auto", width: "60%", paddingLeft: "30px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Product Name</h5>
          <input
            placeholder="Enter name"
            {...register("name", { required: true })}
          />
          <br />
          <br />
          {errors.name && <span>This field is required</span>}
          <br /> <br />
          <h5>wight</h5>
          <input
            placeholder="Enter wight"
            {...register("wight", { required: true })}
          />
          <br />
          <br />
          {errors.description && <span>This field is required</span>}
          <br /> <br />
          <h5>price</h5>
          <input
            placeholder="Enter price"
            {...register("price", { required: true })}
          />
          <br />
          <br />
          <br />
          <h5>description</h5>
          <input
            placeholder="write description"
            {...register("description", { required: true })}
          />
          <br />
          <br />
          {errors.price && <span>This field is required</span>}
          <br /> <br />
          <input type="file" onChange={imgHandle} />
          <br />
          <br />
          <br />
          <input
            style={{
              backgroundColor: "#71BA58",
              color: "white",
              fontWeight: "700",
              letterSpacing: "5px",
              fontSize: "20px",
              borderRadius: "5px",
            }}
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default Event;

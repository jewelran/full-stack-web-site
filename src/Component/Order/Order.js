import React from "react";
import { useForm } from "react-hook-form";
const Order = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
      <div className="">
          <h1 style ={{textAlign:"center"}}>Order Now</h1>
<div className="container d-flex ">
        <div style ={{width:"70%"}} className="">
        <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
        </div>
        <div style ={{width:"30%"}}className="">
            <h1>Order summery</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
      
    </div>
      </div>
    
  );
};

export default Order;

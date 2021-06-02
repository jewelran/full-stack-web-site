import React from "react";
import notFoundImages from "../../images/notFound.gif";
import { pnk } from "react-router-dom";
const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "10rem" }}>
      <img style={{ height: "200px" }} src={notFoundImages} alt="" />
      <h5>No internet</h5>
      <p>Try:</p>
      <p>Checking the network cable, modem, and router</p>
      <p>Reconnecting to Wi-Fi</p>
      <p>
        <a href="javascript:diagnoseErrors()">
          Running Window network Diagnostics
        </a>{" "}
      </p>
      <p>ERR_INTERNET_DISCONNECTED</p>
    </div>
  );
};

export default NotFound;

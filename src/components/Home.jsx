import React from "react";
import test from "../images/test.jpg"

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={test}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              My name is John Stuby. I live in Calgary Alberta, next to the beautiful Rocky Mountains
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
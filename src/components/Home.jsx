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
            <p class="text-left">
              My name is John Stuby. I live in Calgary Alberta. Currently looking for work as a full stack developer. <br></br><br></br>

              Some of my top languages include Ruby, Angularjs and React <br></br><br></br>

              Some of my other interests include: hiking, biking, climbing, backpacking, travelling, live music and cinema. <br></br>


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
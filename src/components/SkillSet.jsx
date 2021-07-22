import React from "react";

function SkillSet() {
  return (
    <div className="skillSet">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <p>
            <b>Languages</b>
          </p>
          <p style={{color: 'teal'}} > 
            JavaScript / NPM / NodeJS  <br></br>
            AngulaJS 1&2 <br></br>
            React / Vue.js <br></br>
            CSS / LESS <br></br>
            mySQL / PSQL / MongoDB <br></br>
            HTML 5
          </p>
          </div>
          <div class="col-lg-5">
          <p>
            <b>Additional Skills</b>
          </p>
          <p style={{color: 'teal'}}>
            Git / SVN <br></br>
            RSPEC / Protractor / Jasmine <br></br>
            Agile / Sprint <br></br>
            Project Management <br></br>
            Linux / WSL2 / Windows <br></br>
            AWS <br></br>
            GIS 
          </p>
        </div>
      </div>
    
      </div>
    </div>
  );
}

export default SkillSet;
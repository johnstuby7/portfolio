import React from "react";
import '../App.css';

function Footer() {
  return (
    <div className="footer">
      <footer class="bg-dark fixed-bottom">
				<div class="float-container">
					<div class="float-child">
						<p class="text-white">
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
					<div class="float-child">
						<p class="text-white">
							Additional SKills
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
      </footer>
    </div>
  );
}

export default Footer;
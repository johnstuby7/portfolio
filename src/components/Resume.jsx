import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import JohnStubyResume from '../images/JohnStubyResume.pdf';

function Resume() { 
  return (
    <div className="resume">
      <div class="container">
        <a class="contact-links contact-links:hover" href="../images/JohnStubyResume.pdf" download>Download John Stuby Resume PDF</a> <br></br>

        <span>
          John Stuby <br></br>
          Full stack Developer <br></br>
          319A 13th Ave NW -Calgary Alberta -T2M 0E9 -(403) 660-8718 <br></br>
          https://github.com/johnstuby7 <nr></nr>
          johnstuby7@gmail.com
        </span> <br></br> <br></br>

        <h2>Personal Summary</h2>
        <p >
          Full Stack Developer with over 9 years experience. Well organized and 
          thrives in a team environment driven by cooperative collaboration. Enjoys developing well-thought-out front end systems.
        </p> <br></br>

        <h3>Skills</h3>
        <div class="row align-items-center">
          <div class="col-lg-7">
          <p>
            <b>Languages</b>
          </p>
          <p> 
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
          <p>
            Git / SVN <br></br>
            RSPEC / Protractor / Jasmine <br></br>
            Agile / Sprint <br></br>
            Project Management <br></br>
            Linux / WSL2 / Windows <br></br>
            AWS <br></br>
            GIS 
          </p>
        </div>
      </div> <br></br>


      <h3>Experience</h3>
      <h5>
        <b>HireGround Software</b>
      </h5>
      <span>
        <h5>Full Stack Developer/ QA Lead</h5>
        <b>October 20, 2019 - November 1, 2020</b> <br></br><br></br>

        <p class="text-left">
          - Implemented changes to QA to improve coverage <br></br>
          &nbsp;&nbsp; - Maintained RSPEC Test suite <br></br>
          &nbsp;&nbsp; - Maintained Protractor test suite <br></br>
          - Implemented changes to code standards site wide <br></br>
          &nbsp;&nbsp; - Managed translations for English/French/Spanish sitewide <br></br>
          &nbsp;&nbsp; - Ensured that specific versions of Chrome/Firefox and Edge worked correctly with application <br></br>
          &nbsp;&nbsp; - Ensured that sites were mobile-friendly <br></br>
          - Performed bug fixes and code reviews <br></br>
          - Helped schedule release of new features <br></br>
          - Created documentation for new project features <br></br>
          - Released new client websites <br></br>
          - Created new features: <br></br>
          &nbsp;&nbsp; - Archive/unarchive functionality for job postings, email templates, rejection reasons and other sections of the site. <br></br>
          &nbsp;&nbsp; - Close reason action for posted jobs. Has three options, archived, filled and cancelled. <br></br>
          &nbsp;&nbsp; - Create template from this job: allows certain user types to take an existing job posting and create a template from it for future use. <br></br>
          &nbsp;&nbsp; - Repost job: allows certain user types to repost a job with new options. <br></br>
          &nbsp;&nbsp; - Job posting options: <br></br>
          &nbsp;&nbsp; - Show requisition number: Adds an input field on a job posting; it will then display this unique identifier in the job posting title. <br></br>
          &nbsp;&nbsp; - Current/previous employees: Adds an input field on a job posting to allow applicants to list whether they were/are a current/previous employee. <br></br>
          &nbsp;&nbsp; - Enable referral name box: Adds an input field to the job posting to allow the applicant to list any referrals they have from the company. <br></br>
          &nbsp;&nbsp; - Created a copy candidate to another job feature. It allows certain user types to copy an applicant's profile to a new job posting. <br></br>
          - Implemented social media connectivity: <br></br>
          &nbsp;&nbsp; - Enabled access to the Facebook API to allow users to post jobs on Facebook <br></br>
          &nbsp;&nbsp; - Enabled access to Instagram to allow users to post jobs on Instagram <br></br>
          &nbsp;&nbsp; - Enabled access to Linkedin to allow applicants to apply with Linkedin credentials <br></br>
        </p>
      </span> <br></br>
      <h5>Development Manager</h5>
      
      <b> October 21, 2018 - October 20, 2019</b> <br></br><br></br>
      <p class="text-left">
        - Worked in unison with business to decide on future work and current priorities <br></br>
        - Managed teams workflow <br></br>
        - Managed the interview/hiring process for junior employees <br></br>
        - Came up with Procedure for onboarding new hires <br></br>
        - Implemented New Suite of tools that handled site settings, including: <br></br>
        &nbsp;&nbsp; - Created Job posting options feature. This feature allowed users to set predefined options for specific fields for future job listings. <br></br>
        &nbsp;&nbsp; - Improved Company details feature to allow the use of multiple logos and listing of more company details <br></br>
        &nbsp;&nbsp; - Improved user management options: Reworked feature to allow more customization for each user option. Total of Five (observer, Decision Maker, 
                       Hiring &nbsp;&nbsp;&nbsp;&nbsp; Manager, Recruiter and Recruiter Admin) <br></br>
        &nbsp;&nbsp; - Improved internal job list functionality <br></br>
        &nbsp;&nbsp; - Improved inline and submit based error messaging sitewide <br></br>
        - Produced documentation for various tasks <br></br>
        - Implemented the design and release of new client websites <br></br>
        - Organized sprints <br></br>
        - Worked with machine learning team to implement search features for jobs and applicants <br></br>

      </p> <br></br>
      <h5>Team Lead/Full stack Developer</h5>
      <b>October First, 2015 - October 20th, 2017</b> <br></br><br></br>
      <p class="text-left">
        - Worked with a team to come up with and implement a plan for designing a replacement API to communicate with AngularJS front-end using Ruby on Rails. 
          &nbsp;&nbsp; Transition included a new database structure with a move from MongoDB to PostgreSQL. <br></br>
        - Implemented RSPEC and Protractor test suites <br></br>
        - Helped implement Agile and Scrum methodologies <br></br>
      </p> <br></br>

      <h5>
        <b>Istock Photography</b>
      </h5>
      <h5>Full Stack Developer</h5>
      <b>October First, 2012 - August 1, 2015 </b><br></br> <br></br>
      <p class="text-left">
        - Implemented security requirements sitewide using Regex, sitewide translations, error messaging services, and a new feature for extended licences on asset
          display page including SEO and meta data improvements. <br></br>
        - Worked to develop a new video consumption device for iStock video contributors to minimize the amount of tools needed to upload video and audio files. <br></br>
        - Set up Amazon Web Services (AWS) for the project. <br></br>
        - Wrote Cucumber and unit tests as needed. <br></br>
      </p>

      <h3> Education</h3> 
      <p >
          <b>Coursera Certificates: March 2021 - present</b> <br></br>
          - SQL for Data Science <br></br>
          - Web Applications for everybody(PHP) <br></br>
          - Spatial Data Science and Applications <br></br>
          - Fundamentals of GIS <br></br>
          - GIS Data Formats, Design and Quality <br></br>
          - Geospatial and environmental Analysis <br></br>
          - Full Stack Web Development with React Specialization <br></br> <br></br>

          <b>SAIT Polytechnic (2008 - 2010)</b> <br></br>
          Information Technology - Software Development

      </p>
      <a class="contact-links contact-links:hover" href="../images/JohnStubyResume.pdf" download>Download John Stuby Resume PDF</a> 
      <p class="download-link"></p> 
    </div>
    </div>
  );
}

export default Resume;
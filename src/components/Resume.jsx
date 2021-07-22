import React from "react";
import { Link, withRouter } from "react-router-dom";

function Resume() {
  return (
    <div className="resume">
      <div class="container">
        <p>John Stuby Resume Link</p>
        <h2>Personal Summary</h2>
        <span>
          Full Stack Developer with over 9 years experience. Well organized and 
          thrives in a team environment driven by cooperative collaboration. Enjoys developing well-thought-out front end systems.
        </span> <br></br>

        <h3>Skills</h3>

        <h3>Experience</h3>
        <Link to={{ pathname: "https://hiregroundsoftware.com/" }} target="_blank" >
          <b>HireGround Software</b>
        </Link> <br></br>
        <span>
        <h4>Full Stack Developer/ QA Lead</h4>
        October 20, 2019 - November 1, 2020

        - Implemented changes to QA to improve coverage
          - Maintained RSPEC Test suite
          - Maintained Protractor test suite
        - Implemented changes to code standards site wide
          - Managed translations for English/French/Spanish sitewide
          - Ensured that specific versions of Chrome/Firefox and Edge worked correctly with application
          - Ensured that sites were mobile-friendly
        - Performed bug fixes and code reviews
        - Helped schedule release of new features
        - Created documentation for new project features
        - Released new client websites
        - Created new features:
          - Archive/unarchive functionality for job postings, email templates, rejection reasons and other sections of the site.
          - Close reason action for posted jobs. Has three options, archived, filled and cancelled.
          - Create template from this job: allows certain user types to take an existing job posting and create a template from it for future use.
          - Repost job: allows certain user types to repost a job with new options. 
          - Job posting options:
            - Show requisition number: Adds an input field on a job posting; it will then display this unique identifier in the job posting title.
            - Current/previous employees: Adds an input field on a job posting to allow applicants to list whether they were/are a current/previous employee.
            - Enable referral name box: Adds an input field to the job posting to allow the applicant to list any referrals they have from the company.
            - Created a copy candidate to another job feature. It allows certain user types to copy an applicant's profile to a new job posting.
        - Implemented social media connectivity:
          - Enabled access to the Facebook API to allow users to post jobs on Facebook
          - Enabled access to Instagram to allow users to post jobs on Instagram
          - Enabled access to Linkedin to allow applicants to apply with Linkedin credentials
        </span> <br></br>
        <h4>Development Manager</h4>
        <span>
        October 21, 2018 - October 20, 2019

        - Worked in unison with business to decide on future work and current priorities
        - Managed teams workflow
        - Managed the interview/hiring process for junior employees
        - Came up with Procedure for onboarding new hires
        - Implemented New Suite of tools that handled site settings, including:
          - Created Job posting options feature. This feature allowed users to set predefined options for specific fields for future job listings. 
          - Improved Company details feature to allow the use of multiple logos and listing of more company details
          - Improved user management options: Reworked feature to allow more customization for each user option. Total of Five (observer, Decision Maker, Hiring Manager, Recruiter and Recruiter Admin)
          - Improved internal job list functionality
          - Improved inline and submit based error messaging sitewide
        - Produced documentation for various tasks
        - Implemented the design and release of new client websites
        - Organized sprints
        - Worked with machine learning team to implement search features for jobs and applicants

        </span> <br></br>
        <h4>Team Lead/Full stack Developer</h4>
        <span>
        October First, 2015 - October 20th, 2017

        - Worked with a team to come up with and implement a plan for designing a replacement API to communicate with AngularJS front-end using Ruby on Rails. 
          Transition included a new database structure with a move from MongoDB to PostgreSQL.
        - Implemented RSPEC and Protractor test suites
        - Helped implement Agile and Scrum methodologies

        </span> <br></br>

        <Link to={{ pathname: "https://www.istockphoto.com/" }} target="_blank" >
        <b>Istock Photography</b>
        </Link> <br></br>
        <h4>Full Stack Developer</h4>
        October First, 2012 - August 1, 2015

        - Implemented security requirements sitewide using Regex, sitewide translations, error messaging services, and a new feature for extended licences on asset display page including SEO and meta data improvements.
        - Worked to develop a new video consumption device for iStock video contributors to minimize the amount of tools needed to upload video and audio files.
        - Set up Amazon Web Services (AWS) for the project.
        - Wrote Cucumber and unit tests as needed.

        <p>John Stuby Resume Link</p>
      </div>
    </div>
  );
}

export default Resume;
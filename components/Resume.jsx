import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { JobTab } from ".";
import Fade from "react-reveal/Fade";
import { HYGRAPH_PERMANENTAUTH_TOKEN, HYGRAPH_URL } from "./constants/Hygraph";
import { jobData } from "./JobData";

const Resume = () => {
  const handleScroll = () => {
    const resumeSection = document.querySelector("#techStack");
    resumeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  //const [jobData, setJobData] = useState(null);

  // useEffect(() => {
  //   const fetchJobData = async () => {
  //     const headers = {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
  //     };
  //     const requestBody = {
  //       query: `{
  //         jobs {
  //           name
  //           role
  //           time
  //           url
  //           description
  //         }
  //       }`,
  //     };
  //     const options = {
  //       method: "POST",
  //       headers,
  //       body: JSON.stringify(requestBody),
  //     };
  //     const response = await (await fetch(HYGRAPH_URL, options)).json();
  //     setJobData(response?.data?.jobs);
  //   };

  //   fetchJobData();
  // }, []);
  return (
    <>
      <Fade left big duration={1500} ssrReveal>
        <ResumeContainer id="resume-section">
          <SectionHeader>
            <h2>Where I've Worked</h2>
            <span></span>
          </SectionHeader>
          {<JobTab data={jobData} />}
          <div className="scroll-down">
            {/* Add an Href here to scroll to next section */}
            <a onClick={handleScroll}>
              <span></span>
            </a>
          </div>
        </ResumeContainer>
      </Fade>
    </>
  );
};

const ResumeContainer = styled.div`
  min-height: 100vh;
  scroll-margin-top: 1rem;

  .scroll-down a span {
    position: absolute;
    top: 80vh;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 2.5px solid;
    border-bottom: 2.5px solid;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: scrolldown 2.75s infinite;
    animation: scrolldown 2.75s infinite;
    box-sizing: border-box;
    border-image: linear-gradient(140deg, #f8081d 0%, #4795c1 100%);
    border-image-slice: 1;
  }
`;

export default Resume;

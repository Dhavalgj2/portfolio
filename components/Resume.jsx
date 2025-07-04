import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import { JobTab } from ".";
import { jobData } from "./JobData";
import { motion } from "framer-motion";

const Resume = () => {
  const handleScroll = () => {
    const resumeSection = document.querySelector("#techStack");
    resumeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ResumeContainer id="resume-section">
        <SectionHeader>
          <h2>Where I&apos;ve Worked</h2>
          <span></span>
        </SectionHeader>
        <JobTab data={jobData} />
        <div className="scroll-down">
          <a onClick={handleScroll} aria-label="Scroll to tech stack">
            <span></span>
          </a>
        </div>
      </ResumeContainer>
    </motion.div>
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
    transform: rotate(-45deg);
    animation: scrolldown 2.75s infinite;
    box-sizing: border-box;
    border-image: linear-gradient(140deg, #f8081d 0%, #4795c1 100%);
    border-image-slice: 1;
  }

  @keyframes scrolldown {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
`;

export default Resume;

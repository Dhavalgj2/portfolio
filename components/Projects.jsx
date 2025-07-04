import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import ProjectTile from "./ProjectTile";
import { motion } from "motion/react";
const Projects = () => {
  return (
    <motion.div big duration={1500} ssrReveal>
      <ProjectContainer>
        <SectionHeader>
          <h2>Some Things I've Built</h2>
          <span></span>
        </SectionHeader>
        <ProjectTile />
      </ProjectContainer>
    </motion.div>
  );
};

const ProjectContainer = styled.div``;

export default Projects;

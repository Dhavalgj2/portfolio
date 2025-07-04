import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import ProjectTile from "./ProjectTile";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ProjectContainer>
        <SectionHeader>
          <h2>Some Things I&apos;ve Built</h2>
          <span></span>
        </SectionHeader>
        <ProjectTile />
      </ProjectContainer>
    </motion.div>
  );
};

const ProjectContainer = styled.div``;

export default Projects;

import React from "react";
import styled from "styled-components";
import { languages } from "./constants/ProgrammingLanguages";
import LanguageTile from "./LanguageTile";
import { motion } from "framer-motion";
import { SectionHeader } from "./CommonStyles";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const Technologies = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeader>
        <h2>My Tech Stack</h2>
        <span></span>
      </SectionHeader>

      <TilesContainer>
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            variants={tileVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LanguageTile name={lang} />
          </motion.div>
        ))}
      </TilesContainer>
    </motion.div>
  );
};

const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  min-height: max-content;

  @media (min-width: 1024px) {
    margin-bottom: 5rem;
  }
`;

export default Technologies;

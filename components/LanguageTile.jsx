import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const LanguageTile = ({ name }) => {
  return (
    <StyledLanguageTile>
      <Image
        src={`/programming-language-logos/${name}.svg`}
        alt={`${name} logo`}
        width={40}
        height={40}
      />
      <span>{name}</span>
    </StyledLanguageTile>
  );
};

const StyledLanguageTile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 0.8rem;
    margin-top: 0.3rem;
    font-weight: 200;
    color: #9cb1bb;
    text-align: center;
  }
`;

export default LanguageTile;

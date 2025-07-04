import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TypingText } from ".";
import Loader from "./Loader";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleScroll = () => {
    const resumeSection = document.querySelector("#resume-section");
    resumeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <HeroContainer>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <section>
            <h1 className="hi">Hi,</h1>
            <h1 className="name-block">
              I&apos;m <span className="my-name">Dhaval</span>
            </h1>
            <TypingText />
            <LogosContainer>
              <a
                href="https://github.com/Dhavalgj2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social-logos/github-original.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dhavalkumar-patel-b35584142/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social-logos/linkedin-plain.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </LogosContainer>
          </section>
          <div className="scroll-down">
            <a onClick={handleScroll}>
              <span></span>
            </a>
          </div>
        </motion.div>
      )}
    </HeroContainer>
  );
};

// Styled components remain unchanged
const HeroContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  font-size: 1.3rem;

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
    border-image: linear-gradient(140deg, #f8081d 0%, #4795c1 100%);
    border-image-slice: 1;
  }

  a {
    cursor: pointer;
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

  section {
    padding-top: 25vh;
  }

  .name-block {
    font-weight: 500;
  }

  .my-name {
    font-family: "Inter", sans-serif;
    background-image: linear-gradient(
      90deg,
      #cc2b5e 0%,
      #cc2b5e 50%,
      #b56316 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  fill: white;
  height: 1.5rem;
  gap: 1rem;
  margin-top: 3rem;

  img {
    height: 1.5rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export default Hero;

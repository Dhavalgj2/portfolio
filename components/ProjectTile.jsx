import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "./constants/ProjectData";
import styled from "styled-components";
import Image from "next/image";

const ProjectTile = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 16);
  }, []);

  const languageBox = (data) =>
    data.map((item, index) => <LanguageBox key={index}>{item}</LanguageBox>);

  return (
    <TileContainer>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {projectData.map((project, index) => (
            <motion.div className="tile-item" key={index}>
              <div className="tile-info">
                <p>{project.name}</p>
                <p>{project.description}</p>
                {languageBox(project.technologies)}
                <div className="logos">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/social-logos/github-original.svg"
                        alt="GitHub Link"
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="external-link"
                        src="/social-logos/external-link.svg"
                        alt="External Site"
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </TileContainer>
  );
};

const TileContainer = styled.div`
  margin-left: -5vw;
  margin-right: -5vw;

  .tile-item {
    position: relative;
    height: 19rem;
    min-width: 12rem;
    background-color: #104f72;
    border-radius: 2rem;
    padding: 2rem;
    margin: 1rem;
    overflow: hidden;
    background: linear-gradient(142deg, #2133f8 0%, #5e2e99 50%, #b7255e 100%);
  }

  .logos {
    display: flex;
    fill: white;
    height: 1.5rem;
    gap: 1rem;
    margin: 1.5rem 0;
    align-items: baseline;

    img {
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.15);
      }
    }

    .external-link {
      height: 1.3rem;
    }
  }

  .tile-info {
    height: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    padding: 10rem 15px 0 15px;
    width: 100%;
    left: 0;
    background: linear-gradient(0deg, #000, transparent);
  }

  p {
    font-size: 0.8rem;
    text-shadow: 0.5px 1px #000000;
    font-weight: 400;
    height: 0.4rem;
  }

  .inner-carousel {
    display: flex;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .tile-item {
      min-width: 12rem;
      height: 44vh;
      max-height: 340px;
    }

    margin-left: 0vw;
    margin-right: 0vw;
  }
`;

const LanguageBox = styled.div`
  border-radius: 0.2rem;
  border: 1px solid #dccfcf;
  display: inline-block;
  font-size: 0.6rem;
  padding: 0.1rem;
  margin-right: 0.4rem;
  color: #dccfcf;
  font-weight: 300;
`;

export default ProjectTile;

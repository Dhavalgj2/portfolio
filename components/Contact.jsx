import styled from "styled-components";
import { SectionHeader } from "./CommonStyles";
import Image from "next/image";

const Contact = () => {
  return (
    <ContactContainer>
      <SectionHeader>
        <h2>Contact</h2>
        <span></span>
      </SectionHeader>
      <div>
        <p>I&apos;m always ready to communicate. You can reach me through</p>
      </div>
      <LogosContainer>
        <a
          href="mailto:dhavalce48@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/social-logos/mail.svg"
            alt="Email"
            className="mail"
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
      </LogosContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  h2 {
    text-align: center;
  }

  p {
    font-weight: 300;
    text-align: center;
    font-size: 0.9rem;
    color: #9cb1bb;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 2rem;
  fill: white;
  gap: 1rem;
  margin: 2rem 0;

  img {
    height: 1.5rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  }

  .instagram {
    height: 1.8rem;
    margin-top: -0.1rem;
  }

  .mail {
    height: 1.8rem;
    margin-top: -0.1rem;
  }
`;

export default Contact;

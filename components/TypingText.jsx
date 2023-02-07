import { FontWeight } from "@cloudinary/url-gen/qualifiers";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer.", // Types 'One'
        1000, // Waits 1s
        "Full-Stack Developer.", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Web Developer.",
        3000,
        "I love creating solutions with code.",
        3000, // Types 'Three' without deleting 'Two'
        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "1.2rem", fontWeight: "200", color: "gray" }}
    />
  );
};
export default TypingText;

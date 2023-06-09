import React from "react";
import { stackList } from "../../data/ProjectData";
import ProfileImage from "../../Assets/bhargavi.png"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={ProfileImage}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Bhargavi.</strong> I'm a Software Developer
            specialized in building web applications using React. Proficient in 
            JavaScript, HTML, and CSS and having a strong understanding of web development principles and concepts. 
            Experienced in using tools and technologies such as Redux, React Router, and Axios to build scalable and performant web applications.
            Also playing a critical role in developing modern web applications that are responsive, interactive, and user-friendly.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

import React from "react";
import { ProfileContainer,Profile,Texts,Social } from "./ProfileStyles";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import ProfileImg from "../../Images/Profile.png"

const ProfComponent = () => {
  return (
    <ProfileContainer id="home">
      <Slide direction="left">
        <Texts>
          <h3>
            Hello, I'm
          </h3>
          <div className="profilename">Thanusiyan Sivapalasundharam</div>
          <h3>UX/UI Designer and Web Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            iusto. Adipisci in qui officia provident tenetur sequi, deserunt
            corporis quos?
          </p>
          <button>Hire me</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
        
          <img
            src={ProfileImg}
            alt="profile"
          />
        </Profile>
      </Slide>
    </ProfileContainer>
  );
};

export default ProfComponent;





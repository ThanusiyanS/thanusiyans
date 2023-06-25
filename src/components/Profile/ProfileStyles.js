import styled from "styled-components";
import { Container } from "../../globalStyles";

export const ProfileContainer = styled(Container)`
display: flex;
gap: 2rem;
padding-top: 3rem;
z-index: 1;

@media (max-width: 640px) {
  flex-direction: column;
}
`;

export const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #09B8E8;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #0179CFEA);
    :hover {
      filter: drop-shadow(0px 10px 10px #0109B8E8);
    }
  }
`;

export const Social = styled.div`
margin-top: 3rem;
display: flex;
align-items: center;
gap: 1rem;
p {
  font-size: 0.9rem;
  @media (max-width: 690px) {
    font-size: 0.7rem;
  }
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    width: 2.3rem;
    height: 2rem;
    clip-path: polygon(25% 0%, 100% 0%, 100% 75%,75% 100%, 0% 100%, 0% 25%);
    background-color: #09B8E8;
    position: relative;
    transition: transform 400ms ease-in-out;
    :hover {
      transform: rotate(360deg);
    }
  }

  a {
    color: #fff;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
`;

export const Profile = styled.div`
    
img {
  width: 25rem;
  filter: drop-shadow(0px 7px 7px #00A3C3);
  transition: transform 400ms ease-in-out;
  @media (max-width: 790px) {
    width: 20rem;
  }


  @media (max-width: 660px) {
    width: 18rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
}



:hover img {
  transform: translateY(-10px);
}
`;

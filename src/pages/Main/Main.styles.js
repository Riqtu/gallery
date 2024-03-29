import styled from '@emotion/styled'

import back from './../../assets/back.png'
import { Link } from 'react-router-dom'

export const MainWrapper = styled.div`
  background-image: url(${back});
  background-size: 100%;
  background-repeat: no-repeat;
  animation: flash 2s forwards ease,
    anim 15s infinite alternate-reverse ease-in-out;
  @keyframes flash {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes anim {
    0% {
      background-position-y: -200px;
    }
    100% {
      background-position-y: 0px;
    }
  }
`

export const LogoWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  img {
    width: 60%;
    margin-left: 20%;
  }
`
export const Links = styled.div`
  position: relative;
  top: auto;
  /* background-color: blue; */
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  /* @media screen and (max-width: 700px) {
    width: 90%;
    left: 5%;
    bottom: 50px;
  } */
`
export const LinkWrapper = styled.div`
  position: relative;
  /* margin-left: 14%; */
  &:nth-of-type(1) {
    text-align: right;
    font-size: 1.5rem;
    @media screen and (max-width: 700px) {
      font-size: 15pt !important;
    }
  }
  &:nth-of-type(4) {
    text-align: left;
    margin-left: 20px;
    @media screen and (max-width: 700px) {
      font-size: 15pt !important;
    }
  }
  flex-grow: 1;
  text-align: center;
  margin-top: ${(props) => props.margin}px;
  opacity: 0;
  animation: topWave ${(props) => props.duration}s ${(props) => props.delay}s
      ease infinite alternate,
    flash 2s 2s forwards ease;
  float: left;
  @keyframes topWave {
    0% {
      transform: 0;
    }
    100% {
      transform: translateY(20px);
    }
  }
`

export const StyledLink = styled(Link)`
  /* position: relative; */
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: black;
  font-size: 30pt;
  text-decoration: none;
  width: fit-content;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 700px) {
    font-size: 15pt;
  }
`
export const AboutWrapper = styled.section`
  position: relative;
  /* height: 100vh; */
  width: 100%;
  img {
    top: 0%;
    width: 30%;
    position: absolute;
    left: auto;
    right: 0%;
    @media screen and (max-width: 770px) {
      position: relative;
      width: 80%;
      left: 10%;
      margin: 20px 0;
    }
  }
  margin-bottom: 40px;
  @media screen and (max-width: 770px) {
    min-height: 100vh;
    height: auto;
  }
`
export const AboutText = styled.div`
  position: relative;
  left: 25%;
  width: 30%;
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    font-family: 'Open Sans', sans-serif;
  }
  @media screen and (max-width: 770px) {
    width: 90%;
    left: 5%;
  }
`
export const AboutSecondText = styled.div`
  position: relative;
  left: 10%;
  width: 45%;
  margin-top: 50px;
  margin-bottom: 100px;
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    font-family: 'Open Sans', sans-serif;
  }
  @media screen and (max-width: 770px) {
    width: 90%;
    left: 5%;
  }
`
export const Logo = styled.img`
  width: 80%;
  margin-left: 10%;
`

export const PageBlock = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-image: url(${(props) => props.back});
  background-size: cover;
  background-color: #fff8f6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  /* filter: saturate(0%); */
  cursor: pointer;
  @media screen and (max-width: 770px) {
    height: 200px;
  }
  /* &:nth-of-type(4) {
    h1 {
      font-size: 30pt;
    }
  } */
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 40pt;
    margin-left: 40px;
    width: 100%;
    transition: 0.7s;

    @media screen and (max-width: 770px) {
      font-size: 25pt;
    }
  }

  &:hover {
    filter: drop-shadow(0px 0px 10px black);
    h1 {
      width: 30%;
    }
  }
`

export const ContactsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export const ContactsImg = styled.img`
  position: absolute;
  width: 10%;
  left: 0;
  top: auto;
  bottom: 0;
  @media screen and (max-width: 770px) {
    display: none;
  }
`

export const ContactsBackImg = styled.img`
  position: absolute;
  width: 80%;
  top: auto;
  bottom: -200px;
  left: 15%;
  @media screen and (max-width: 770px) {
    bottom: 0;
    left: 10%;
  }
`
export const ContactsText = styled.div`
  position: absolute;
  left: 15%;
  top: 80px;
  width: 80%;
  @media screen and (max-width: 770px) {
    left: 5%;
    top: 20px;
    width: 90%;
  }
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 60pt;
  }
  p {
    margin-top: -50px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 20pt;
  }
`

export const ContactsTextAddres = styled.p`
  position: absolute;
  left: auto;
  right: 40px;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20pt !important;
  text-align: right;
  top: 170px;
  opacity: 0.4;
  @media screen and (max-width: 770px) {
    position: relative;
    text-align: left;
    top: 25px;
    left: 0;
    right: 0;
    font-size: 20pt;
  }
`

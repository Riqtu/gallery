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
  width: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
`
export const Links = styled.div`
  position: absolute;
  width: 100%;
  height: 240px;
  top: auto;
  bottom: 0;
`
export const LinkWrapper = styled.div`
  position: relative;
  margin-left: 14%;
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
  font-size: 35pt;
  text-decoration: none;
`
export const AboutWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  img {
    top: 0%;
    width: 30%;
    position: absolute;
    left: auto;
    right: 0%;
  }
`
export const AboutText = styled.div`
  position: relative;
  left: 24%;
  width: 30%;
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    font-family: 'Open Sans', sans-serif;
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
  background-color: #fff8f6;
  display: grid;
  align-content: center;
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 60pt;
    margin-left: 40px;
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
`

export const ContactsBackImg = styled.img`
  position: absolute;
  width: 80%;
  top: auto;
  bottom: -200px;
  left: 15%;
`
export const ContactsText = styled.div`
  position: absolute;
  left: 15%;
  top: 80px;
  width: 80%;

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
    font-size: 30pt;
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
`

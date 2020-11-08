import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import back from './../../assets/postersBack.jpg'

export const GalleryWrapper = styled.div`
  overflow: hidden;
  background: url(${back});
  background-size: 100%;
  height: 100vh;
  min-height: 800px;
  background-repeat: no-repeat;
  animation: flash 2s forwards ease, anim 10s infinite alternate-reverse ease;

  @keyframes anim {
    0% {
      background-position-y: -200px;
    }
    100% {
      background-position-y: 0px;
    }
  }
  @media screen and (max-width: 700px) {
    background-size: 300%;
    min-height: 660px;
    height: auto;
  }
`

export const Header = styled.header`
  padding: 20px 40px;
  position: relative;
  width: 100%;
  height: 100px;
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 60pt;
    line-height: 0;
    float: left;
  }
  img {
    margin-top: 40px;
    margin-left: 35px;
  }
  @media screen and (max-width: 1050px) {
    padding: 40px 20px;

    h1 {
      font-size: 20pt;
    }
    img {
      width: 50%;
      margin-top: 10px;
      margin-left: 15px;
    }
  }
`
export const StyledLink = styled(Link)`
  position: absolute;
  top: 80px;
  right: 130px;
  text-decoration: none;
  color: black;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20pt;
  line-height: 0;
  transition: 0.3s;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1050px) {
    left: 0;
    right: 0;
    width: calc(100% - 50px);
    text-align: center;
    margin: 0;
    padding: 0;
    top: 120px;
  }
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 170%;
  left: -49%;
  margin-left: 0;
  margin-top: 60px;
  @media screen and (max-width: 700px) {
    width: 303%;
    left: -125%;
  }
`

export const SliderBlock = styled.div`
  position: relative;
  width: 100vw;
  height: 73vh;
  min-height: 600px;
  display: grid;
  align-content: center;
  justify-content: center;
  margin-left: 25.5%;
  outline: none;
  @media screen and (max-width: 700px) {
    height: 50vh;
    min-height: 300px;
  }
`
export const SliderImg = styled.img`
  width: ${(props) => (props.w ? props.w : 50)}%;
  margin-left: ${(props) => (props.l ? props.l - 0.5 : 25)}%;
  transition: 0.5s;
  opacity: ${(props) => (props.active ? 0.2 : 1)};
  &:focus {
    outline: none;
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  /* background-color: blue; */
  /* margin-left: 35%; */
`

export const SliderTitle = styled.div`
  position: absolute;
  top: auto;
  bottom: 0px;
  text-align: center;
  width: 100%;
  margin-top: 40px;
  opacity: ${(props) => (props.swiped ? 0 : 1)};
  transition: 0.3s;
  text-align: center;
  h1 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: normal;
    font-size: 35pt;
    text-transform: uppercase;
  }
  p {
    font-family: 'Oswald';
    margin-top: -38px;
    /* color: #828282; */
    font-size: 20pt;
    text-transform: uppercase;
  }
`

export const NextArrow = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: fixed;
  left: auto;
  right: 32%;
  top: auto;
  bottom: 13%;

  outline: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2) translateX(5px);
  }
  @media screen and (max-width: 700px) {
    left: auto;
    right: 10%;
    top: 60%;
  }
`
export const PrevArrow = styled.button`
  cursor: pointer;
  border: none;
  z-index: 100;
  background-color: transparent;

  position: fixed;
  left: 32%;
  top: auto;
  bottom: 13%;
  outline: none;
  transition: 0.3s;
  transform: rotate(180deg);
  &:hover {
    transform: scale(1.2) translateX(-5px) rotate(180deg);
  }
  @media screen and (max-width: 700px) {
    left: 10%;
    top: 60%;
  }
`

export const BuyButton = styled.div`
  position: absolute;
  top: 45%;
  left: calc(50% - 100px);
  width: 200px;
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 40pt;
  transition: 0.3s;
  opacity: ${(props) => (props.active ? 0.8 : 0)};

  color: black;
  text-decoration: underline;
  cursor: pointer;
`
export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  transition: 0.5s;
  transform: translateY(${(props) => (props.active ? '0' : '-100%')});
  z-index: 100;
  display: grid;
  justify-content: center;
  align-content: center;
`
export const Modal = styled.div`
  width: 40vw;
  height: 500px;
  top: 0;
  /* background-color: rgba(255, 255, 255, 1); */
  transition: 0.7s;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  background: url(${back});
  background-size: 150%;
  background-repeat: no-repeat;
  animation: flash 2s forwards ease, anim 10s infinite alternate-reverse ease;
  h1 {
    text-align: center;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 40pt;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    height: 400px;
  }
`

export const ContactsText = styled.div`
  /* position: absolute; */
  /* left: 15%; */
  top: 80px;
  /* margin-left: 20px; */
  /* width: 80%; */
  p {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
    font-size: 20pt;
    a {
      text-decoration: none;
      color: black;
    }
    @media screen and (max-width: 700px) {
      font-size: 15pt;
    }
  }
`

export const ContactsTextAddres = styled.p`
  position: relative;
  left: auto;
  /* right: 40px; */
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20pt !important;
  text-align: center;
  opacity: 0.4;
  @media screen and (max-width: 700px) {
    font-size: 15pt !important;
  }
`

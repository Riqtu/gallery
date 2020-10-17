import styled from '@emotion/styled'

import back from './../../assets/postersBack.jpg'

export const GalleryWrapper = styled.div`
  overflow: hidden;
  background: url(${back});
  background-size: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  animation: anim 10s infinite alternate-reverse ease;
  @keyframes anim {
    0% {
      background-position-y: -200px;
    }
    100% {
      background-position-y: 0px;
    }
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
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 170%;
  left: -49%;
  margin-left: 0;
  margin-top: 60px;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`

export const SliderBlock = styled.div`
  position: relative;
  width: 100vw;
  height: 73vh;
  display: grid;
  align-content: center;
  justify-content: center;
  margin-left: 25.5%;
  outline: none;
  @media screen and (max-width: 700px) {
    height: 200px;
  }
`
export const SliderImg = styled.img`
  width: ${(props) => (props.w ? props.w : 50)}%;
  margin-left: ${(props) => (props.l ? props.l - 1 : 25)}%;
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
    top: 35%;
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
    top: 35%;
  }
`

import styled from '@emotion/styled'
import back from './../../assets/back.png'

export const ModalElWrapper = styled.section`
  background-image: url(${back});
  background-size: 100%;
  background-repeat: no-repeat;
  animation: anim 15s infinite alternate-reverse ease-in-out;
  overflow-y: auto;
  transition: 0.2s;
  @keyframes anim {
    0% {
      background-position-y: -200px;
    }
    100% {
      background-position-y: 0px;
    }
  }
  top: 0;
  left: 0;
  /* position: fixed; */
  display: flex;
  min-height: 100vh;
  /* max-height: 100vh; */
  padding: 0 5%;
  background-color: #fff8f6;
  opacity: ${(props) => (props.active ? '1' : '0')};

  transition-delay: transform 0.5s;

  transition: opacity 0.5s, transform 0s;
  z-index: 100;
  /* align-items: center;
  justify-content: center;
  flex-wrap: wrap; */
`
export const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* min-width: 100vw; */
`
export const ImageWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px;
  width: 50%;
  margin-bottom: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    padding: 50px;
    padding-bottom: 0;
    width: 70%;
  }
  img {
    width: ${(props) => (props.resize ? '70%' : '90%')};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export const DescriptionWrapper = styled.section`
  padding: 40px;
  width: 35%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 800px) {
    padding: 0 40px;
  }
  span {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    text-transform: uppercase;
    opacity: 0.2;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
    }
  }
  text {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 20px;
    &:nth-of-type(2) {
      font-size: 2rem;
    }
    &:nth-of-type(3) {
      font-size: 1rem;
    }
    &:nth-of-type(4) {
      font-size: 1rem;
    }
    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }
  a {
    color: black;
  }
`

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  color: black;
  top: 20px;
  left: auto;
  right: 30px;
  z-index: 101;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.5rem;
  opacity: 0.6;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 800px) {
    right: 0;
  }
`

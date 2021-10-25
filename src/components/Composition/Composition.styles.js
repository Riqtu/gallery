import styled from '@emotion/styled'
import back from './../../assets/postersBack.jpg'
import { Link } from 'react-router-dom'

export const CompositionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  justify-content: center;
  max-width: 95%;
  margin-left: 2.5%;
  position: relative;
  /* display: ${(props) => (props.modalActive ? 'none' : 'flex')}; */
  /* max-height: calc(100vh - 50px); */

  &::before {
    top: 0;
    position: fixed;
    content: '';
    width: 100%;
    height: 100vh;
    background: url(${back});
    z-index: 0;
  }
`

export const ImageBlock = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: fit-content;
  z-index: 2;

  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
  line-height: 1;
  img {
    width: 100%;
    height: auto;
    max-width: 320px;
    transition: 0.3s;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }
  h1 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  p {
    margin-top: -15px;
    font-family: 'Oswald';
    font-size: 20pt;
    text-transform: uppercase;
  }
`

export const Header = styled.header`
  padding: 20px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2rem;
    line-height: 0;
    float: left;
  }
  img {
    width: 30%;
    margin-top: 10px;
    margin-left: 35px;
  }
  @media screen and (max-width: 1050px) {
    /* padding: 40px 20px; */
    div {
      width: 50%;
    }
    h1 {
      line-height: 1.3;
      font-size: 1rem;
    }
    img {
      width: 85%;
      margin-top: 10px;
      margin-left: 15px;
    }
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20pt;
  transition: 0.3s;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`

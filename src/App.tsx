import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg'

type ToggleProps = {
  open: boolean;
}

const App = () => {
  const [open, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(prev => !prev);
    console.log(open);
  };

  return (
    <Container>
      <Header>
        <a href="#" className="logo">Water.</a>
        <Toggle onClick={toggleHandler} open={open}>
          { open ? <CgClose size={30} /> : <GiHamburgerMenu size={30}/>}
        </Toggle>
      </Header>
      <Glass open={open}/>
      <Content open={open}>
        <h2>
          Happiness...<br /><span>Crystal clear ocean water.</span>
        </h2>
      </Content>
      <Video src='water.mp4' autoPlay muted loop></Video>
      <Ul open={open}>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </Ul>
      <Nav open={open}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Tour</a></li>
        <li><a href="#">Contact</a></li>
      </Nav>
    </Container>
  )
}

export default App;

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 100;
  justify-content: space-between;
  align-items: center;

  .logo {
    position: absolute;
    font-size: 2em;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
    transition: .5s;
  }
  @media (max-width: 991px) {
    padding: 20px;
  }

  span {
    @media (max-width: 991px) {
      font-size: .25em;
      letter-spacing: 2px;
      padding: 0 5px;
    }
  }
`;

const Toggle = styled.div<ToggleProps>`
  position: relative;
  top: 1rem;
  left: 100%;
  width: 50px;

  &:before {
    content: 'close';
    position: absolute;
    top: .5rem;
    left: -5rem;
    text-transform: uppsercase;
    letter-spacing: 2px;
    font-size: 14px;
    padding: 2px 5px;
    background: #fff;
    color: #111;

    ${({ open }) => !open && css`
      content: 'Menu';
    `}
  }

  svg {
    position: absolute;
    top: 0;
    color: #fff;
    cursor: pointer;
  }
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Glass = styled.div<ToggleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(15px);
  box-shadow: 10px 0 15px rgba(0, 0, 0, .1);
  transition: .5s;
  transition-delay: .5s;

  ${({ open }) => open && css`
    width: 100%;
    backdrop-filter: blur(20px);
    transition-delay: 0s;
  `}

  @media (max-width: 991px) {
    width: 50%;
  }
`

const Content = styled.div<ToggleProps>`
  position: relative;
  z-index: 10;
  text-align: center;
  transition: .5s;
  transition-delay: .5s;

  ${({ open }) => open && css`
    opacity: 0;
    visibility: hidden;
    transform: translateX(-200px);
    transition-delay: 0s;
  `}

  h2 {
    position: relative;
    color: #fff;
    font-size: 10vw;
    line-height: .55em;
    text-shadow: 0 5px 5px rgba(0, 0, 0, .2);
    font-family: 'Dancing Script', cursive;
    
    @media (max-width: 991px) {
      font-size: 18vw;
    }
    
  }

  span {
    font-size: .2em;
    font-weight: 300;
    letter-spacing: 5px;
    background: #fff;
    color: #111;
    padding: 0 10px;
    text-shadow: 0 5px 5px rgba(0, 0, 0);
    box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
    text-transform: uppercase;
  }
`

const Ul = styled.ul<ToggleProps>`
  position: absolute;
  bottom: 40px;
  right: 100px;
  display: flex;
  z-index: 100;

  li {
    list-style: none;
    margin: 5px;
    padding: 0 6px;
    background: #fff;
    transition: .5s;

    &:nth-child(1) {
      transition-delay: calc(.2s * 1);
    }

    &:nth-child(2) {
      transition-delay: calc(.2s * 2);
    }

    &:nth-child(3) {
      transition-delay: calc(.2s * 3);
    }

    ${({ open }) => open && css`
      opacity: 0;
      visibility: hidden;
      transform: translateY(100px);
    `}
  }

  a {
    color: #111;
    text-decoration: none;
    display: inline-block;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
  }

  @media (max-width: 991px) {
    bottom: 20px;
    right: 20px;
  }
  
`

const Nav = styled.ul<ToggleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  li {
    list-style: none;
    text-align: center;
    margin: 15px 0;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
    transform: translateX(200px);

    ${({ open }) => open && css`
      opacity: 1;
      visibility: visible;
      transform: translateX(0px);
    `}

    &:nth-child(1) {
      transition-delay: calc(.2s * 1);
    }
    &:nth-child(2) {
      transition-delay: calc(.2s * 2);
    }
    &:nth-child(3) {
      transition-delay: calc(.2s * 3);
    }
    &:nth-child(4) {
      transition-delay: calc(.2s * 4);
    }
  }

  a {
    color: #111;
    font-size: 1.5em;
    letter-spacing: 4px;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    background: #fff;
    padding: 4px 10px;
    display: inline-block;
  }

  a:hover {
    background: #111;
    color: #fff;
    letter-spacing: 10px;
    text-transform: lowercase;
  }
`
import React, { Component } from "react";
import { Button } from "./Button";
import logo from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
// media query
import { generateMedia } from "styled-media-query";
export default class Header extends Component {
  render() {
    return (
      <HeaderContainer className="header-container">
        <div className="header-top">
          <Logo src={logo} alt="logo" />
          <NavLink className="signIn-btn">Sign In</NavLink>
        </div>
        {/* Header content  */}
        <div className="header-content">
          <Title>See what's next.</Title>
          <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
          <Button className="main-offer-btn" primary>
            try it now
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={47} />
          </Button>
        </div>
      </HeaderContainer>
    );
  }
}
// Media query
const CustomMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

// LOgo

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  // media query
  ${CustomMedia.lessThan("tablet")`
    left: 20%;
  `}
`;

// Header container
const HeaderContainer = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-pink-color);
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      background: var(--main-hover-color);
    }
    ${CustomMedia.lessThan("smTablet")`
    margin-top: 1.25rem;
    right: 5%;
    `}
  }
  //   header top
  .header-top {
    position: relative;
    height: 7rem;
    z-index: 1;
  }

  //   header content
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
    ${CustomMedia.lessThan("smTablet")`
      display: grid;
      grid-template-rows: repeat(3, 60px);
      margin-top: 8rem;

    `}
  }

  //   icon

  .Icon svg {
    vertical-align: bottom;
    padding-left: 1rem;

    ${CustomMedia.lessThan("smTablet")`
      display: none !important;
    `}
  }
  .main-offer-btn {
    ${CustomMedia.lessThan("lgDesktop")`
     margin: 0 33%;
     font-size: 1.5rem; 
     `}
    ${CustomMedia.lessThan("mdDesktop")`
    margin: 0 25%;
    font-size: 1.5rem; 
    `}
    ${CustomMedia.lessThan("tablet")`
    margin: 0 20%;
    font-size: 1.3rem; 
    `}
  }
`;

// header content main titke

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
  ${CustomMedia.lessThan("tablet")`
  
  font-size: 2.6rem; 
  `}
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${CustomMedia.lessThan("smTablet")`
  
  font-size: 1.4rem; 
  margin: 0;
  `}
`;

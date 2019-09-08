import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";
import { generateMedia } from "styled-media-query";

export default function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        {/* tab bottom content  */}
        <div className="tab-bottom-content">
          {/* tv image container */}
          <div>
            <img src={ImgTv} alt="" style={{ width: "18.75rem" }} />
            <h3>Watch on yout TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, blue-ray ,
              players and more.
            </p>
          </div>
          {/* tablet image container */}
          <div>
            <img
              src={ImgTablet}
              alt=""
              style={{ width: "18.75rem", paddingTop: "0.625rem" }}
            />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone and tablet whatever you go.</p>
          </div>
          {/* macbook image container */}
          <div>
            <img
              src={ImgMacbook}
              alt=""
              style={{
                width: "18.75rem",
                paddingTop: "0.625rem",
                paddingBottom: "0.625rem"
              }}
            />
            <h3>Use any computer</h3>
            <p>Watch right on Netflix.com</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

// media
const CustomMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "900px"
});

// main tab
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }
  //   tab tab container

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;

    ${CustomMedia.lessThan("smDesktop")`
      grid-template-columns: repeat(2, 1fr);

    `}
    ${CustomMedia.lessThan("tablet")`
    grid-template-columns:1fr;
    text-align: center;
    row-gap: 1.5rem;
    `}
  }

  span {
    grid-column: 1 / 8;
    ${CustomMedia.lessThan("tablet")`
    grid-column: 1 / -1;
   font-size: 1.5rem;
    `}
  }
  .btn {
    grid-column: 10/12;
    ${CustomMedia.lessThan("tablet")`
    grid-column: 1 / -1;
    margin-left: 30%;
    margin-right: 30%;
 
    `}

  }
  img {
    width: 100%;
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;

    ${CustomMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
 
    `}

    
  }
  h3 }
  margin: 0.5rem 0;
  p {
    color: var(--main-grey-color);
    
  }
`;

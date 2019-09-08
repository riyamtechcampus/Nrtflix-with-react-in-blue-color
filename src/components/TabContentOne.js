import React from "react";
import styled from "styled-components";
import Img from "../images/tab-1-pic.png";
import { Button } from "./Button";
import { generateMedia } from "styled-media-query";

//

export default function TabContentOne() {
  return (
    <div>
      <TabContentContainer className="container">
        <div className="tab-content">
          <div>
            <span className="title" style={{ marginBottom: "2rem" }}>
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>
            <br />
            <Button style={{ marginTop: "2rem" }}>try it now</Button>
          </div>
          <img src={Img} alt="" />
        </div>
      </TabContentContainer>
    </div>
  );
}

// media
const CustomMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "960px"
});

// Main Content container

const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  .container {
    margin: 0 10%;
  }

  img {
    width: 31.875rem;
  }
  .title {
    margin-top: 2rem;
    ${CustomMedia.lessThan("smDesktop")`
    font-size: 1.5rem;
    line-height: 1;
    `}
  }
  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;

    ${CustomMedia.lessThan("tablet")`
      grid-template-columns: 100%;
      text-align: center;
      padding-left: 0 ;
      padding-right: 0;
    `}
  }
`;

import React from "react";
import styled from "@emotion/styled";
import heart from "./assests/wedding-13176.png";
import backgrds from "./assests/backgrds.jpg";
const PageLayout = styled.div`
  min-height: 100vh;
  background: #fff;
  .parallax {
    background-image: ${({ path }) => `url(${path})`};
    filter: blur(2px);
  }
  .content {
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #3c3c3c;
    font-family: var(--brideFont);
    font-weight: bold;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    .name {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .wed-date {
      font-size: 1.5em;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      margin-top: 1em;
    }
    .wed-date::first-letter,
    .wed-date span {
      font-size: 32px;
    }
    .hearts {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      img {
        height: 60px;
        object-fit: cover;
      }
    }
    .groom {
      font-size: 5.2em;
    }
    .bride {
      font-size: 5.2em;
    }
  }
  @media all and (max-width: 768px) {
    .content {
      top: 50%;
      .name {
        flex-direction: column;
        height: 25vh;
        justify-content: space-evenly;
      }
      .wed-date {
        font-size: 1em;
      }
      .hearts {
        font-size: 1.5em;
        img {
          height: 40px;
          object-fit: cover;
        }
      }
      .groom {
        font-size: 2.5em;
      }
      .bride {
        font-size: 2.5em;
      }
    }
  }
`;
function Section1() {
  return (
    <PageLayout path={backgrds}>
      <div className="parallax"></div>
      <div className="content">
        <div className="name">
          <span className="groom">Suresh சுரேஷ்</span>
          <div className="hearts">
            <img src={heart} alt="weds" />
          </div>
          <span className="bride">Shruthi</span>
        </div>
        <div className="wed-date">
          <span>Nov</span>ember <span>26</span>, 2020
        </div>
      </div>
      {/* <a className="gla_scroll_down gla_go" href="#gla_content">
        <b></b>
        Scroll
      </a> */}
    </PageLayout>
  );
}

export default Section1;

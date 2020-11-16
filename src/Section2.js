import React from "react";
import styled from "@emotion/styled";
import groomImgs from "./assests/groom1.jpeg";
import brideImgs from "./assests/bride1.jpeg";
import backgrds from "./assests/1315500.jpg";

const PageLayout = styled.div`
  // max-width: 792px;
  margin: 0 auto;
  background-image: ${({ path }) => `url(${path})`};
  color: #fff;
  font-size: 16px;
  font-weight:400;
  h1 {
    letter-spacing: 10px;
    text-align: center;
    font-family: Lora, serif;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 32px;
  }
  h3 {
    text-align: center;
    font-family: var(--brideFont);
    font-weight: bold;
    font-size: 3.2em;
  }
  .story-desc {
    font-size: 1.125em;
    line-height: 1.8;
    max-width: 720px;
    margin: 0 auto 20px;
    padding: 0 15px;
    text-align: center;
    font-familt: "Montserrat-Regular", sans-serif;
  }

  .boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .box {
    width: 300px;
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 200;
    padding: 0 4vw 4vw;
    border-right: 2px;
    border-left: 0;
    border-style: solid;
    border-image: linear-gradient(to bottom, #181818, #eee, #181818) 1 100%;
  }
  .box:last-child {
    border-right: 0;
  }

  .box-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight:600;
  }
  .desc {
    font-size: 1.125em;
  }
  .desc::first-letter,.story-desc::first-letter {
    font-size: 200%;
  }
  .box .card {
    position: relative;
    height: 400px;
    background: #060c21;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
  }
  .box .card:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    transform: skew(2deg, 2deg);
    z-index: -1;
  }

  .box .card:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    pointer-events: none;
  }

  .groom .card:before {
    background: linear-gradient(315deg, #ff0057, #5d02ff);
  }

  .bride .card:before {
    background: linear-gradient(315deg, #89ff00, #00bcd4);
  }

  .card img {
    height: 85%;
    width: 85%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .boxes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .box {
      min-width: 300px;
      font-size: 1em;
      line-height: 1.5em;
      font-weight: 200;
      padding: 0 4vw 4vw;
      border-bottom: 2px !important;
      border-top: 0;
      border-style: solid;
      border-image: linear-gradient(to left, #181818, #eee, #181818) 1 100%;
    }
    .box:last-child {
      border-bottom: 0;
    }
  }
`;

function Section2() {
  return (
    <PageLayout className="parallax" path={backgrds}>
      <h1>Our Story</h1>
      <p className="story-desc">
        We met at my sister's engagement, we didn't speak, but we sent the text
        on Facebook, we spoke a lot, we understand each other, now we are here.
      </p>
      <div className="groom">
        <div className="boxes">
          <div className="box">
            <div className="card">
              <img src={groomImgs} alt="groom" />
            </div>
          </div>
          <div className="box box-desc">
            <h3>Suresh</h3>
            <div className="desc">
              I am just a common man with common thoughts, and I’ve led a common
              life. There are no monuments dedicated to me and my name will soon
              be forgotten. But in one respect I have succeeded as gloriously as
              anyone who’s ever lived. I’ve loved another with all my heart and
              soul and to me, this has always been enough.
            </div>
          </div>
        </div>
      </div>
      <div className="bride">
        <div className="boxes">
          <div className="box box-desc">
            <h3>Shruthi</h3>
            <div className="desc">
              We are all a little weird and life’s a little weird. And we find
              someone whose weirdness is compatible with ours, we join up with
              them and fall in mutual weirdness and call it love.
            </div>
          </div>
          <div className="box">
            <div className="card">
              <img src={brideImgs} alt="bride" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Section2;

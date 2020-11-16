import React from "react";
import styled from "@emotion/styled";
import useBigDayCount from "./useBigDayCount";
import backgrds from "./assests/1315500.jpg";
import EmotionBreakpoint from "./emotion_breakpoint";

const PageLayout = styled.div`
  color: #333;
  // margin: 0 auto;
  background-image: ${({ path }) => `url(${path})`};
  // min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  .content {
    position: relative;
    z-index: 1;
    h2 {
      letter-spacing: 4px;
      margin: 8px 0;
      color: #fff;
      font-weight: 900;
      font-size: 64px;
      ${EmotionBreakpoint("mobile")} {
        font-size: 36px;
      }
      ${EmotionBreakpoint("tablet")} {
        font-size: 48px;
      }
      ${EmotionBreakpoint("xs")} {
        font-size: 24px;
      }
      span {
        font-weight: 400;
      }
    }
  }
  .countdown {
    color: #fff;
    font-size: 62px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    .number {
      font-weight: bold;
      font-size: 56px;
      ${EmotionBreakpoint("mobile")} {
        font-size: 36px;
      }
      ${EmotionBreakpoint("tablet")} {
        font-size: 48px;
      }
      ${EmotionBreakpoint("xs")} {
        font-size: 24px;
      }
    }
    .unit {
      color: #a8dade;
      text-transform: capitalize;
      font-size: 52px;
      ${EmotionBreakpoint("mobile")} {
        font-size: 32px;
      }
      ${EmotionBreakpoint("tablet")} {
        font-size: 42px;
      }
      ${EmotionBreakpoint("xs")} {
        font-size: 18px;
      }
    }
  }
  // .timer {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-evenly;
  //   padding: 16px;
  //   background: #1d3357;
  //   color: #f1faee;
  //   border-radius: 10px;
  // }
`;
function Section4() {
  const [timeLeft] = useBigDayCount(`11/26/2020`);

  return (
    <PageLayout path={backgrds} className="parallax">
      <div className="content">
        <h2>Countdown to our big day!</h2>
        <div className="countdown">
          {Object.keys(timeLeft).map((interval) => {
            return (
              <div key={interval}>
                <p className="number">
                  {!timeLeft[interval] ? "00" : timeLeft[interval]}
                </p>
                <div className="unit">{interval}</div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export default Section4;

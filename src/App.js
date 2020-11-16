import "./App.css";
import styled from "@emotion/styled";
import music from "./assests/Alai Payuthey.mp3";
import useAudio from "./useAudio";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const MainLayout = styled.div`
  .section1 {
    text-align: center;
    h2 {
      font-size: 4em;
    }
    .story {
      font-size: 2em;
    }
  }
  .index-img {
    background-size: cover;
    position: relative;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
  }
  .gla_scroll_down {
    position: absolute;
    bottom: 40px;
    text-decoration: none;
    font: italic 400 14px/18px Playfair Display, Arial;
    color: #333;
    width: 40px;
    left: 50%;
    margin-left: -20px;
    text-align: center;
    z-index: 2;
  }
  .gla_scroll_down:hover {
    color: #fff;
  }
  .gla_wht_txt .gla_scroll_down b {
    border: 2px solid #fff;
  }
  .gla_scroll_down b {
    width: 25px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 15px;
    display: inline-block;
    position: relative;
  }
  .gla_wht_txt .gla_scroll_down b::before {
    background: #fff;
  }
  .gla_scroll_down b::before {
    display: block;
    content: "";
    position: absolute;
    height: 4px;
    width: 2px;
    background: #fff;
    left: 50%;
    transform: translateX(-50%);
    top: 8px;
    position: absolute;
    animation: 2s infinite mouse-scroll;
  }
`;

function App() {
  const [playing, toggle] = useAudio(music);
  return (
    <MainLayout>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </MainLayout>
  );
}

export default App;

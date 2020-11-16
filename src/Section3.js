import React from "react";
import styled from "@emotion/styled";

const PageLayout = styled.div`
  max-width: 792px;
  margin: 0 auto;
  margin-bottom: 46px;
  h1 {
    letter-spacing: 10px;
    text-align: center;
    font-family: Lora, serif;
    font-weight: bold;
    text-transform: uppercase;
  }
  h1::before {
    content: "─";
    margin-right: 0.6em;
    color: #686868;
  }
  h1::after {
    content: "─";
    margin-left: 0.6em;
    color: #686868;
  }

  .container {
    position: relative;
    width: 100%;
    overflow: hidden;
    // height: 100vh;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  }
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
function Section3() {
  return (
    <PageLayout>
      <h1>Map</h1>
      <div className="container">
        <iframe
          className="responsive-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0828426865737!2d77.34415061447898!3d11.1072036560389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907ba865e17af%3A0x96c4bed13181b761!2sVaalipalayam%20Murugan%20Temple!5e0!3m2!1sen!2sin!4v1605260579416!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen={false}
          aria-hidden={false}
          tabIndex="0"
          title="SharedLocation"
        ></iframe>
      </div>
    </PageLayout>
  );
}

export default Section3;

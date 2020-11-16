import React from "react";
import styled from "@emotion/styled";

const FooterLayout = styled.div`
  color: #fff;
  background: #172337;
  text-align: center;
  display: flex;
  height: 5em;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  span {
    font-weight: 500;
  }
`;
function Footer() {
  return (
    <FooterLayout>
      © 2020 A service provided by &nbsp;
      <span>Pappu Shankar ( 7305661133 )</span>
    </FooterLayout>
  );
}

export default Footer;

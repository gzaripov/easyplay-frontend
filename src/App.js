import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as logo } from "./logo.svg";

const App = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

const LogoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled(logo)`
  animation: ${LogoAnimation} infinite 5s cubic-bezier(0.4, 0.68, 0.72, 0.26);
  height: 40vmin;
`;

export default () => (
  <App>
    <Logo />
  </App>
);

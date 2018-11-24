import React from "react";
import styled from "styled-components";
import { Button, PrimaryText } from "../Components";
import arrowLeft from "./icons/arrow-left.png";

const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px 38px;
  box-shadow: 0px 2px 8px 0 rgba(0, 0, 0, 0.12);
`;

const BackButton = styled(Button)`
  position: absolute;
  left: 38px;
  top: 50%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: #e05300;
`;

const BackIcon = styled.img`
  margin-left: 12px;
`;

const Title = styled(PrimaryText)`
  font-family: Helvetica;
  font-size: 26px;
  font-weight: bold;
  color: rgba(33, 33, 33, 0.87);
`;

export default ({ title, history }) => (
  <Header>
    <BackButton onClick={() => history.goBack()}>
      <BackIcon src={arrowLeft} alt="arrow left" />
      Back
    </BackButton>
    <Title>{title}</Title>
  </Header>
);

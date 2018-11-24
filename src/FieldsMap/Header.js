import React from "react";
import styled from "styled-components";
import { PrimaryText, SecondaryText } from "../Components";
import burger from "./icons/burger.png";

const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  background: white;
  padding: 20px 38px;
  box-shadow: 0px 2px 8px 0 rgba(0, 0, 0, 0.12);
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: ${p => `url(${p.url})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 26px;
`;

const Burger = styled.img`
  width: 28px;
  margin-left: auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled(PrimaryText)`
  font-weight: 500;
  margin-bottom: 10px;
  color: black;
`;

export default () => (
  <Header>
    <Avatar url="/icons/avatar.jpg" />
    <Info>
      <Title>Hello, Nikolai</Title>
      <SecondaryText>Put the marker on the where you live</SecondaryText>
    </Info>
    <Burger src={burger} alt="burger img" />
  </Header>
);

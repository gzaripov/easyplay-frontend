import React from "react";
import styled from "styled-components";
import { PrimaryText, SecondaryText } from "../../Components";
import burger from "./icons/burger.png";

const Header = styled.header`
  display: flex;
  align-items: center;
  background: white;
  padding: 20px 38px;
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
      <SecondaryText>Put the marker on the place where you live</SecondaryText>
    </Info>
    <Burger src={burger} alt="burger img" />
  </Header>
);

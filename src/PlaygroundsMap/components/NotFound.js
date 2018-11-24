import React from "react";
import styled from "styled-components";
import sad from "./icons/sad.png";

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  margin-top: 38px;
  opacity: 0.7;
`;

const Title = styled.span`
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  color: rgba(33, 33, 33, 0.87);
  margin-top: 22px;
`;

const Subtitle = styled.span`
  font-family: Roboto;
  font-size: 16px;
  color: rgba(33, 33, 33, 0.87);
  max-width: 300px;
  margin-top: 20px;
`;

export default () => (
  <NotFound>
    <Icon src={sad} alt="Sad icon" />
    <Title>Games not found</Title>
    <Subtitle>Update your search preferences or create your own game</Subtitle>
  </NotFound>
);

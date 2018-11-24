import React from "react";
import styled from "styled-components";
import { Button } from "../../Components";
import settings from "./icons/settings.png";

const Info = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffe2d2;
  padding: 25px 0;
`;

const Text = styled.span`
  opacity: 0.87;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: rgba(224, 83, 0, 0.87);
  border-bottom: 1px solid rgba(224, 83, 0, 0.87);
  margin: 0 10px;
  cursor: pointer;
`;

const SettingsButton = styled(Button)`
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
`;

const SettingsIcons = styled.img`
  display: block;
  width: 20px;
`;

export default ({ filters }) => (
  <Info>
    {filters.map(({ id, title }) => (
      <Text key={id}>{title}</Text>
    ))}
    <SettingsButton>
      <SettingsIcons src={settings} alt="Settings icon" />
    </SettingsButton>
  </Info>
);

import React from "react";
import styled from "styled-components";
import { Button, PrimaryButton } from "../Components";
import settings from "./icons/settings.png";

const BottomSheet = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px -2px 8px 0 rgba(0, 0, 0, 0.12);
  background: white;
`;

const SearchInfo = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffe2d2;
  padding: 25px 0;
`;

const SearchText = styled.span`
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
  width: 20px;
`;

const FindGameButton = styled(PrimaryButton)`
  width: 100%;
  max-width: 370px;
  margin-top: 30px;
`;

const ShowNextActivities = styled(Button)`
  opacity: 0.87;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);
  margin: 24px 0;
  padding: 0;
`;

export default ({ activities }) => (
  <BottomSheet>
    <SearchInfo>
      {activities.map(({ id, title }) => (
        <SearchText key={id}>{title}</SearchText>
      ))}
      <SettingsButton>
        <SettingsIcons src={settings} alt="Settings icon" />
      </SettingsButton>
    </SearchInfo>
    <FindGameButton>Find Game</FindGameButton>
    <ShowNextActivities>Show upcoming games</ShowNextActivities>
  </BottomSheet>
);

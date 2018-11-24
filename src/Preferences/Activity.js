import React from "react";
import styled from "styled-components";
import { PrimaryText } from "../Components";
import selectedIcon from "./icons/checkmark.png";

const Activity = styled.div`
  display: flex;
  padding: 12px 16px;
  margin-bottom: 14px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: ${p => (p.selected ? "0 0 3px 0 rgba(0, 180, 255, 0.3)" : "")};
`;

const Name = styled(PrimaryText)`
  margin-left: 16px;
  margin-right: auto;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export default ({ icon, title, ...props }) => (
  <Activity {...props}>
    <Icon src={icon} alt="Activity icon" />
    <Name>{title}</Name>
    <Icon src={selectedIcon} alt="Selected icon" />
  </Activity>
);

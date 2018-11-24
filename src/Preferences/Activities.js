import React from "react";
import styled from "styled-components";
import { SecondaryText } from "../Components";
import Activity from "./Activity";
import sortDown from "./icons/sort-down.png";

const Activities = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 46px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  opacity: 0.32;
  margin-left: auto;
`;

export default ({ title, activities, onSelect, ...props }) => (
  <Activities {...props}>
    <Title>
      <SecondaryText>{title}</SecondaryText>
      <Icon src={sortDown} alt="sort down icon" />
    </Title>
    {activities.map(activity => (
      <Activity key={activity.id} {...activity} onClick={onSelect(activity)} />
    ))}
  </Activities>
);

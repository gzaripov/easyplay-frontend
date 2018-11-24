import React from "react";
import styled from "styled-components";
import { BoldText } from "../Components";
import Activity from "./Activity";

const Activities = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 46px;
`;

const Title = styled(BoldText)`
  text-align: left;
  margin-bottom: 20px;
`;

export default ({ title, activities, onSelect, ...props }) => (
  <Activities {...props}>
    <Title>{title}</Title>
    {activities.map(activity => (
      <Activity key={activity.id} {...activity} onClick={onSelect(activity)} />
    ))}
  </Activities>
);

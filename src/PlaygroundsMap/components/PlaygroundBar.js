import React from "react";
import styled from "styled-components";
import plus from "./icons/plus.png";
import map from "./icons/map.png";
import { Button } from "../../Components";

const PlaygroundBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 36px;
`;

const Status = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  color: #ff5a00;
  text-align: left;
  margin-bottom: 20px;
`;

const Address = styled.span`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  color: #212121;
  text-align: left;
`;

const Distance = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: rgba(33, 33, 33, 0.37);
  margin-left: 16px;
`;

const Prop = styled.span`
  font-family: Roboto;
  font-size: 16px;
  line-height: 4.25;
  letter-spacing: -0.4px;
  text-align: left;
  color: rgba(33, 33, 33, 0.87);
  margin-right: 20px;

  ::first-letter {
    font-weight: 500;
  }
`;

const Props = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Actions = styled.div`
  display: flex;
  margin-left: auto;
`;

const Action = styled(Button)`
  margin-left: 30px;
`;

const ActionIcon = styled.img`
  display: block;
  width: 30px;
  height: 30px;
`;

export default ({ name, address, type }) => (
  <PlaygroundBar>
    <Info>
      <Status>BEST MATCH</Status>
      <Address>
        {address}
        <Distance>0.9 Km</Distance>
      </Address>
      <Props>
        <Prop>3 Online</Prop>
        <Prop>2 Coming</Prop>
        <Prop>{type}</Prop>
      </Props>
    </Info>
    <Actions>
      <Action>
        <ActionIcon src={plus} alt="Add icon" />
      </Action>
      <Action>
        <ActionIcon src={map} alt="Route icon" />
      </Action>
    </Actions>
  </PlaygroundBar>
);

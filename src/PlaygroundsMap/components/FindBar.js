import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Button, PrimaryButton } from "../../Components";
import { STATE } from "..";

const FindBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
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

const FindBar = ({ history, onFindGame }) => (
  <FindBarStyled>
    <FindGameButton onClick={onFindGame}>Find Game</FindGameButton>
    <ShowNextActivities onClick={() => history.push(STATE.upcomingGames)}>
      Show upcoming games
    </ShowNextActivities>
  </FindBarStyled>
);

export default withRouter(FindBar);

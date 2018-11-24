import React from "react";
import styled from "styled-components";
import { PlaygroundBar } from "./index";
import { PrimaryButton, Divider } from "../../Components";

const UpcomingGamesBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 45vh;
  overflow-y: auto;
  background: white;
  padding-top: 10px;
`;

const Separator = styled(Divider)`
  height: 1px;
  width: 100%;
  margin: 0 40px;
`;

const CreateGameButton = styled(PrimaryButton)`
  margin-top: 124px;
  margin-bottom: 24px;
  width: 370px;
`;

export default ({ games }) => (
  <UpcomingGamesBar>
    {games.map(game => (
      <>
        <PlaygroundBar key={game.id} {...game} />
        <Separator />
      </>
    ))}
    <CreateGameButton>Create Game</CreateGameButton>
  </UpcomingGamesBar>
);

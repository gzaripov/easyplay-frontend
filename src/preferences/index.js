import React from "react";
import styled from "styled-components";
import { Heading, PrimaryButton } from "../Components";
import Activities from "./Activities";

const PageContainer = styled.section`
  padding-top: 54px;
  background-color: #fafafa;
`;

const Page = styled.div`
  margin: 0 86px;
`;

const Header = styled(Heading)`
  margin-bottom: 32px;
`;

const Divider = styled.hr`
  width: 50px;
  height: 4px;
  background-color: #ff7200;
  margin: 0;
  border: none;
`;

const summerActivities = [
  { id: 0, icon: "/icons/soccer.png", title: "Football" },
  { id: 1, icon: "/icons/basketball.png", title: "Basketball" },
  { id: 2, icon: "/icons/volleyball.png", title: "Volleyball" },
  { id: 3, icon: "/icons/skateboarding.png", title: "Skateboarding" }
];

const winterActivities = [
  { id: 0, icon: "/icons/hockey.png", title: "Hockey" },
  { id: 1, icon: "/icons/ice-skate.png", title: "Skating" },
  { id: 2, icon: "/icons/skiing.png", title: "Skiing" },
  { id: 3, icon: "/icons/swimming.png", title: "Winter swimming" }
];

const FinishButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 110px;
  margin-bottom: 40px;
`;

export default () => (
  <PageContainer>
    <Page>
      <Header>Choose your favorites games and activities</Header>
      <Divider />
      <Activities title="Summer activites" activities={summerActivities} />
      <Activities title="Winter activites" activities={winterActivities} />
      <FinishButton>Finish</FinishButton>
    </Page>
  </PageContainer>
);

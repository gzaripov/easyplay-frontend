import React, { Component } from "react";
import styled from "styled-components";
import { Heading, PrimaryButton } from "../Components";
import Activities from "./Activities";
import activitesMock from "./mock.json";

const PageContainer = styled.section`
  padding-top: 54px;
  background-color: #fafafa;
`;

const Page = styled.div`
  max-width: 400px;
  margin: 0 auto;
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

const FinishButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 110px;
  margin-bottom: 40px;
`;

export default class extends Component {
  state = { ...activitesMock, selectedIds: [] };

  toggleSelection = ({ id }) => () => {
    const ids = this.state.selectedIds;
    if (!ids.includes(id)) {
      this.setState({
        selectedIds: [...ids, id]
      });
    } else {
      this.setState({
        selectedIds: ids.filter(selId => selId !== id)
      });
    }
  };

  render() {
    const { summerActivities, winterActivities, selectedIds } = this.state;
    const summerActs = summerActivities.map(act => ({
      selected: selectedIds.includes(act.id),
      ...act
    }));
    const winterActs = winterActivities.map(act => ({
      selected: selectedIds.includes(act.id),
      ...act
    }));
    return (
      <PageContainer>
        <Page>
          <Header>Choose your favorites games and activities</Header>
          <Divider />
          <Activities
            title="Summer activites"
            activities={summerActs}
            onSelect={this.toggleSelection}
          />
          <Activities
            title="Winter activites"
            activities={winterActs}
            onSelect={this.toggleSelection}
          />
          <FinishButton>Finish</FinishButton>
        </Page>
      </PageContainer>
    );
  }
}

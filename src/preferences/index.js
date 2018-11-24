import React, { Component } from "react";
import styled from "styled-components";
import { Heading, PrimaryButton, Divider } from "../Components";
import Activities from "./Activities";
import UserApi, { PREFERENCE } from "../api/user";
import ServerApi from "../api/api";
import { PAGE } from "../App";

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

const Separator = styled(Divider)`
  width: 50px;
  height: 4px;
  background-color: #ff7200;
`;

const FinishButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 110px;
  margin-bottom: 40px;
`;

function getActivitiesBySeason(activities, season) {
  return activities.filter(act => act.season === season);
}

export default class extends Component {
  state = {
    summerActivities: [],
    winterActivities: [],
    selectedIds: []
  };

  componentDidMount() {
    ServerApi.getActivities().then(activities => {
      const summerActivities = getActivitiesBySeason(activities, "summer");
      const winterActivities = getActivitiesBySeason(activities, "winter");
      this.setState({ summerActivities, winterActivities });
    });
    if (UserApi.hasPreference(PREFERENCE.selectedActivities)) {
      const ids = UserApi.getPreference(PREFERENCE.selectedActivities);
      this.setState({ selectedIds: ids });
    }
  }

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

  updatePreferences = () => {
    const { selectedIds } = this.state;
    if (selectedIds.length > 0) {
      UserApi.addPreference(PREFERENCE.selectedActivities, selectedIds);
      this.props.history.push(PAGE.map);
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
          <Separator />
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
          <FinishButton
            onClick={this.updatePreferences}
            disabled={selectedIds.length === 0}
          >
            Finish
          </FinishButton>
        </Page>
      </PageContainer>
    );
  }
}

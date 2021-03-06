import React, { Component } from "react";
import styled from "styled-components";
import { Spinner } from "../Components";
import Modal, { Header } from "./Modal";

const Heading = styled(Header)`
  margin-top: 10px;
`;

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

class Timer extends Component {
  state = {
    seconds: 0
  };

  componentDidMount() {
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  tick = () => {
    const seconds = this.state.seconds + 1;
    this.setState({ seconds });
  };

  render() {
    const secs = this.state.seconds;
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return (
      <div>
        {pad(minutes, 2)}:{pad(seconds, 2)}
      </div>
    );
  }
}

export default ({ title }) => (
  <Modal>
    <Spinner color="#ff591c" />
    <Heading>{title}</Heading>
    <Timer />
  </Modal>
);
